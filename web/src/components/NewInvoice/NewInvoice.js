import { useMutation, useFlash, useQuery } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import { sortBy } from 'lodash';
import InvoiceForm from 'src/components/InvoiceForm';

const CLIENT_LIST = gql`
  query CLIENTS {
    clients {
      id
      name
    }
  }
`;

const CREATE_INVOICE_MUTATION = gql`
  mutation CreateInvoiceMutation($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      id
    }
  }
`;

const NewInvoice = () => {
  const { addMessage } = useFlash();
  const { data } = useQuery(CLIENT_LIST);

  const [createInvoice, { loading, error }] = useMutation(CREATE_INVOICE_MUTATION, {
    onCompleted: () => {
      navigate(routes.invoices());
      addMessage('Invoice created.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = input => {
    const castInput = Object.assign(input, { clientId: parseInt(input.clientId) });
    createInvoice({ variables: { input: castInput } });
  };

  return <InvoiceForm onSave={onSave} loading={loading} error={error} clients={sortBy(data?.clients, ['name'])} />;
};

export default NewInvoice;

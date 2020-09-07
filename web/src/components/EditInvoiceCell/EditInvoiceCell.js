import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import InvoiceForm from 'src/components/InvoiceForm';

export const QUERY = gql`
  query FIND_INVOICE_BY_ID($id: Int!) {
    invoice: invoice(id: $id) {
      id
      number
      date
      clientId
      items
      total
      createdAt
      updatedAt
    }
  }
`;
const UPDATE_INVOICE_MUTATION = gql`
  mutation UpdateInvoiceMutation($id: Int!, $input: UpdateInvoiceInput!) {
    updateInvoice(id: $id, input: $input) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ invoice }) => {
  const { addMessage } = useFlash();
  const [updateInvoice, { loading, error }] = useMutation(UPDATE_INVOICE_MUTATION, {
    onCompleted: () => {
      navigate(routes.invoices());
      addMessage('Invoice updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { clientId: parseInt(input.clientId) });
    updateInvoice({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Invoice {invoice.id}</h2>
      </header>
      <div className="rw-segment-main">
        <InvoiceForm invoice={invoice} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};

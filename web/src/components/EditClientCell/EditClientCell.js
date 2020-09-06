import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import LoadingSpinner from '../LoadingSpinner';
import ClientForm from 'src/components/ClientForm';

export const QUERY = gql`
  query FIND_CLIENT_BY_ID($id: Int!) {
    clientDetails: clientDetails(id: $id) {
      id
      name
      address
      email
      phone
      website
      vat
      notes
      createdAt
      updatedAt
    }
  }
`;
const UPDATE_CLIENT_MUTATION = gql`
  mutation UpdateClientMutation($id: Int!, $input: UpdateClientInput!) {
    updateClient(id: $id, input: $input) {
      id
    }
  }
`;

export const Loading = () => <LoadingSpinner />;

export const Success = ({ clientDetails: client }) => {
  const { addMessage } = useFlash();
  const [updateClient, { loading, error }] = useMutation(UPDATE_CLIENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.clients());
      addMessage('Client updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    updateClient({ variables: { id, input } });
  };

  return <ClientForm client={client} onSave={onSave} error={error} loading={loading} />;
};

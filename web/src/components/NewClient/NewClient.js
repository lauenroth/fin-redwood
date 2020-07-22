import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import ClientForm from 'src/components/ClientForm';

const CREATE_CLIENT_MUTATION = gql`
  mutation CreateClientMutation($input: CreateClientInput!) {
    createClient(input: $input) {
      id
    }
  }
`;

const NewClient = () => {
  const { addMessage } = useFlash();
  const [createClient, { loading, error }] = useMutation(CREATE_CLIENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.clients());
      addMessage('Client created.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = input => {
    createClient({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <ClientForm onSave={onSave} loading={loading} error={error} />
    </div>
  );
};

export default NewClient;

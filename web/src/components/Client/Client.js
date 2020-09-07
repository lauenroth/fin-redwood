import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: Int!) {
    deleteClient(id: $id) {
      id
    }
  }
`;

const Client = ({ client }) => {
  const { addMessage } = useFlash();
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.clients());
      addMessage('Client deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete client ' + id + '?')) {
      deleteClient({ variables: { id } });
    }
  };

  return (
    <>
      <h2>{client.name}</h2>
      {client.address && (
        <address>
          <pre>{client.address}</pre>
        </address>
      )}
      <dl>
        {client.email && (
          <>
            <dt>E-Mail:</dt>
            <dd>
              <a href={`mailto:${client.email}`}>{client.email}</a>
            </dd>
          </>
        )}
        {client.phone && (
          <>
            <dt>Phone:</dt>
            <dd>{client.phone}</dd>
          </>
        )}
        {client.website && (
          <>
            <dt>Website:</dt>
            <dd>
              <a href={client.website} target="_blank" rel="noreferrer">
                {client.website}
              </a>
            </dd>
          </>
        )}
        {client.vat && (
          <>
            <dt>VAT:</dt>
            <dd>{client.vat}</dd>
          </>
        )}
        {client.notes && (
          <>
            <dt>Notes:</dt>
            <dd>
              <pre>{client.notes}</pre>
            </dd>
          </>
        )}
      </dl>
      <Link to={routes.editClient({ id: client.id })} className="button">
        Edit
      </Link>
      <button className="danger" onClick={() => onDeleteClick(client.id)}>
        Delete
      </button>
    </>
  );
};

export default Client;

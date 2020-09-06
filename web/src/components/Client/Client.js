import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';
import styled from 'styled-components';

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
      {client.address && <address>{client.address}</address>}
      <dl>
        {client.email && (
          <>
            <dt>E-Mail:</dt>
            <dd>{client.email}</dd>
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
            <dd>{client.website}</dd>
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
      {/* <a href="#" className="button" onClick={() => onDeleteClick(client.id)}>
        Delete
      </a> */}
    </>
  );
};

export default Client;

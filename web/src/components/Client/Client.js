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
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Client {client.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{client.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{client.name}</td>
            </tr>
            <tr>
              <th>address</th>
              <td>{client.address}</td>
            </tr>
            <tr>
              <th>email</th>
              <td>{client.email}</td>
            </tr>
            <tr>
              <th>phone</th>
              <td>{client.phone}</td>
            </tr>
            <tr>
              <th>website</th>
              <td>{client.website}</td>
            </tr>
            <tr>
              <th>vat</th>
              <td>{client.vat}</td>
            </tr>
            <tr>
              <th>notes</th>
              <td>{client.notes}</td>
            </tr>
            <tr>
              <th>createdAt</th>
              <td>{client.createdAt}</td>
            </tr>
            <tr>
              <th>updatedAt</th>
              <td>{client.updatedAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editClient({ id: client.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <a href="#" className="rw-button rw-button-red" onClick={() => onDeleteClick(client.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default Client;

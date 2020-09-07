import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_INVOICE_MUTATION = gql`
  mutation DeleteInvoiceMutation($id: Int!) {
    deleteInvoice(id: $id) {
      id
    }
  }
`;

const jsonDisplay = obj => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = datetime => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = checked => {
  return <input type="checkbox" checked={checked} disabled />;
};

const Invoice = ({ invoice }) => {
  const { addMessage } = useFlash();
  const [deleteInvoice] = useMutation(DELETE_INVOICE_MUTATION, {
    onCompleted: () => {
      navigate(routes.invoices());
      addMessage('Invoice deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete invoice ' + id + '?')) {
      deleteInvoice({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Invoice {invoice.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{invoice.id}</td>
            </tr>
            <tr>
              <th>Number</th>
              <td>{invoice.number}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(invoice.date)}</td>
            </tr>
            <tr>
              <th>Client id</th>
              <td>{invoice.clientId}</td>
            </tr>
            <tr>
              <th>Items</th>
              <td>{jsonDisplay(invoice.items)}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{invoice.total}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(invoice.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(invoice.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editInvoice({ id: invoice.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <a href="#" className="rw-button rw-button-red" onClick={() => onDeleteClick(invoice.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default Invoice;

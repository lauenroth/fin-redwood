import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';

const DELETE_INVOICE_MUTATION = gql`
  mutation DeleteInvoiceMutation($id: Int!) {
    deleteInvoice(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = text => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = obj => {
  return truncate(JSON.stringify(obj, null, 2));
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

const InvoicesList = ({ invoices }) => {
  const { addMessage } = useFlash();
  const [deleteInvoice] = useMutation(DELETE_INVOICE_MUTATION, {
    onCompleted: () => {
      addMessage('Invoice deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete invoice ' + id + '?')) {
      deleteInvoice({ variables: { id }, refetchQueries: ['INVOICES'] });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Number</th>
            <th>Date</th>
            <th>Client id</th>
            <th>Items</th>
            <th>Total</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{truncate(invoice.id)}</td>
              <td>{truncate(invoice.number)}</td>
              <td>{timeTag(invoice.date)}</td>
              <td>{truncate(invoice.clientId)}</td>
              <td>{jsonTruncate(invoice.items)}</td>
              <td>{truncate(invoice.total)}</td>
              <td>{timeTag(invoice.createdAt)}</td>
              <td>{timeTag(invoice.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.invoice({ id: invoice.id })}
                    title={'Show invoice ' + invoice.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInvoice({ id: invoice.id })}
                    title={'Edit invoice ' + invoice.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete invoice ' + invoice.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(invoice.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesList;

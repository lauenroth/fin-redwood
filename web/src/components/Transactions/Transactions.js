import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';

const DELETE_TRANSACTION_MUTATION = gql`
  mutation DeleteTransactionMutation($id: Int!) {
    deleteTransaction(id: $id) {
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

const TransactionsList = ({ transactions }) => {
  const { addMessage } = useFlash();
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION_MUTATION, {
    onCompleted: () => {
      addMessage('Transaction deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete transaction ' + id + '?')) {
      deleteTransaction({ variables: { id }, refetchQueries: ['TRANSACTIONS'] });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Payee</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Foreign amount</th>
            <th>Foreign currency</th>
            <th>Category</th>
            <th>Vat</th>
            <th>Reference</th>
            <th>Description</th>
            <th>Import</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{truncate(transaction.id)}</td>
              <td>{timeTag(transaction.date)}</td>
              <td>{truncate(transaction.payee)}</td>
              <td>{truncate(transaction.amount)}</td>
              <td>{truncate(transaction.type)}</td>
              <td>{truncate(transaction.foreignAmount)}</td>
              <td>{truncate(transaction.foreignCurrency)}</td>
              <td>{truncate(transaction.category)}</td>
              <td>{truncate(transaction.vat)}</td>
              <td>{truncate(transaction.reference)}</td>
              <td>{truncate(transaction.description)}</td>
              <td>{truncate(transaction.import)}</td>
              <td>{timeTag(transaction.createdAt)}</td>
              <td>{timeTag(transaction.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.transaction({ id: transaction.id })}
                    title={'Show transaction ' + transaction.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTransaction({ id: transaction.id })}
                    title={'Edit transaction ' + transaction.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete transaction ' + transaction.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(transaction.id)}
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

export default TransactionsList;

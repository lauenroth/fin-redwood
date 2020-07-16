import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_TRANSACTION_MUTATION = gql`
  mutation DeleteTransactionMutation($id: Int!) {
    deleteTransaction(id: $id) {
      id
    }
  }
`;

const Transaction = ({ transaction }) => {
  const { addMessage } = useFlash();
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION_MUTATION, {
    onCompleted: () => {
      navigate(routes.transactions());
      addMessage('Transaction deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete transaction ' + id + '?')) {
      deleteTransaction({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Transaction {transaction.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{transaction.id}</td>
            </tr>
            <tr>
              <th>date</th>
              <td>{transaction.date}</td>
            </tr>
            <tr>
              <th>payee</th>
              <td>{transaction.payee}</td>
            </tr>
            <tr>
              <th>amount</th>
              <td>{transaction.amount}</td>
            </tr>
            <tr>
              <th>type</th>
              <td>{transaction.type}</td>
            </tr>
            <tr>
              <th>foreignAmount</th>
              <td>{transaction.foreignAmount}</td>
            </tr>
            <tr>
              <th>foreignCurrency</th>
              <td>{transaction.foreignCurrency}</td>
            </tr>
            <tr>
              <th>category</th>
              <td>{transaction.category}</td>
            </tr>
            <tr>
              <th>vat</th>
              <td>{transaction.vat}</td>
            </tr>
            <tr>
              <th>reference</th>
              <td>{transaction.reference}</td>
            </tr>
            <tr>
              <th>description</th>
              <td>{transaction.description}</td>
            </tr>
            <tr>
              <th>import</th>
              <td>{transaction.import}</td>
            </tr>
            <tr>
              <th>createdAt</th>
              <td>{transaction.createdAt}</td>
            </tr>
            <tr>
              <th>updatedAt</th>
              <td>{transaction.updatedAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editTransaction({ id: transaction.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <a href="#" className="rw-button rw-button-red" onClick={() => onDeleteClick(transaction.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default Transaction;

const TransactionImportList = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Payee</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction, index) => (
        <tr key={`transaction-${index}`}>
          <td>{transaction.date}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.payee}</td>
          <td>{transaction.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionImportList;

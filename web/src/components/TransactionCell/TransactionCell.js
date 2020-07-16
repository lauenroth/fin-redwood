import Transaction from 'src/components/Transaction';

export const QUERY = gql`
  query FIND_TRANSACTION_BY_ID($id: Int!) {
    transaction: transaction(id: $id) {
      id
      date
      payee
      amount
      type
      foreignAmount
      foreignCurrency
      category
      vat
      reference
      description
      import
      createdAt
      updatedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Transaction not found</div>;

export const Success = ({ transaction }) => {
  return <Transaction transaction={transaction} />;
};

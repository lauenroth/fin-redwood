import Invoice from 'src/components/Invoice';

export const QUERY = gql`
  query FIND_INVOICE_BY_ID($id: Int!) {
    invoice: invoice(id: $id) {
      id
      number
      date
      clientId
      items
      total
      createdAt
      updatedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Invoice not found</div>;

export const Success = ({ invoice }) => {
  return <Invoice invoice={invoice} />;
};

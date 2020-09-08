import Invoices from 'src/components/Invoices';
import LoadingSpinner from 'src/components/LoadingSpinner';

export const QUERY = gql`
  query INVOICES {
    invoices {
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

export const Loading = () => <LoadingSpinner />;

export const Empty = () => {
  return <div>No invoices yet.</div>;
};

export const Success = ({ invoices }) => {
  return <Invoices invoices={invoices} />;
};

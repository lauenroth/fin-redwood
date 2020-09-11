import Invoices from 'src/components/Invoices/Invoices';
import LoadingSpinner from 'src/components/LoadingSpinner';
import NoData from '../NoData';

export const QUERY = gql`
  query INVOICES {
    invoices {
      id
      number
      date
      status
      total
      createdAt
      updatedAt

      client {
        name
        logo
      }
    }
  }
`;

export const Loading = (): JSX.Element => <LoadingSpinner />;

export const Empty = (): JSX.Element => <NoData title="No invoices yet" />;

export const Success = ({ invoices }): JSX.Element => {
  return <Invoices invoices={invoices} />;
};

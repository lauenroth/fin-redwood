import { ReactElement } from 'react';
import Invoices from 'src/components/Invoices/Invoices';
import LoadingSpinner from 'src/components/LoadingSpinner';
import NoData from '../NoData';

export const QUERY = gql`
  query INVOICES {
    invoices {
      id
      number
      date
      total
      createdAt
      updatedAt

      client {
        name
      }
    }
  }
`;

export const Loading = (): ReactElement => <LoadingSpinner />;

export const Empty = (): ReactElement => <NoData title="No invoices yet" />;

export const Success = ({ invoices }): ReactElement => {
  return <Invoices invoices={invoices} />;
};

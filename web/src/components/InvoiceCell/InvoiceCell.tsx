import { ReactElement } from 'react';
import LoadingSpinner from 'src/components/LoadingSpinner';
import Invoice from 'src/components/Invoice';

export const QUERY = gql`
  query FIND_INVOICE_BY_ID($id: Int!) {
    invoice: invoice(id: $id) {
      id
      number
      date
      items
      total

      client {
        name
      }
    }
  }
`;

export const Loading = (): ReactElement => <LoadingSpinner />;

export const Empty = (): ReactElement => <div>Invoice not found</div>;

export const Success = ({ invoice }): ReactElement => {
  return <Invoice invoice={invoice} />;
};

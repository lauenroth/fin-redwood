import { Link, routes } from '@redwoodjs/router';

import Invoices from 'src/components/Invoices';

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No invoices yet. '}
      <Link to={routes.newInvoice()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ invoices }) => {
  return <Invoices invoices={invoices} />;
};

import { Link, routes } from '@redwoodjs/router';
import Clients from 'src/components/Clients';

import LoadingSpinner from '../LoadingSpinner';

export const QUERY = gql`
  query CLIENTS {
    clients {
      id
      name
      address
      email
      phone
      website
      vat
      notes
      createdAt
      updatedAt
    }
  }
`;

export const Loading = () => <LoadingSpinner />;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No clients yet. '}
      <Link to={routes.newClient()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ clients }) => {
  return <Clients clients={clients} />;
};

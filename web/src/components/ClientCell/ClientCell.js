import Client from 'src/components/Client';
import LoadingSpinner from '../LoadingSpinner';

export const QUERY = gql`
  query FIND_CLIENT_BY_ID($id: Int!) {
    clientDetails: clientDetails(id: $id) {
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

export const Empty = () => <div>Client not found</div>;

export const Success = ({ clientDetails: client }) => {
  return <Client client={client} />;
};

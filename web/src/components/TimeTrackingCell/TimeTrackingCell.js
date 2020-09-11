import TimeTracking from 'src/components/TimeTracking';

export const QUERY = gql`
  query FIND_TIME_TRACKING_BY_ID($id: Int!) {
    timeTracking: timeTracking(id: $id) {
      id
      clientId
      date
      hours
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>TimeTracking not found</div>;

export const Success = ({ timeTracking }) => {
  return <TimeTracking timeTracking={timeTracking} />;
};

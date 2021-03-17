import LoadingSpinner from 'src/components/LoadingSpinner';
import TimeTrackings from 'src/components/TimeTrackings/TimeTrackings';
import NoData from 'src/components/NoData';

export const QUERY = gql`
  query TIME_TRACKINGS($from: Date!, $to: Date!) {
    timeTrackingsWeek: timeTrackingsWeek(from: $from, to: $to) {
      id
      date
      hours

      client {
        name
        logo
      }
    }
  }
`;

export const Loading = (): JSX.Element => <LoadingSpinner />;

export const Empty = (): JSX.Element => <NoData title="No time tracking yet" />;

export const Success = ({ timeTrackings }): JSX.Element => {
  return <TimeTrackings timeTrackings={timeTrackings} />;
};

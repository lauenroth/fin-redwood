import { Link, routes } from '@redwoodjs/router';

import LoadingSpinner from 'src/components/LoadingSpinner';
import TimeTrackings from 'src/components/TimeTrackings/TimeTrackings';
import NoData from 'src/components/NoData';

export const QUERY = gql`
  query TIME_TRACKINGS {
    timeTrackings {
      id
      clientId
      date
      hours
      createdAt

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

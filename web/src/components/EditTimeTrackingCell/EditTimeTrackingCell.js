import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import TimeTrackingForm from 'src/components/TimeTrackingForm';

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
const UPDATE_TIME_TRACKING_MUTATION = gql`
  mutation UpdateTimeTrackingMutation($id: Int!, $input: UpdateTimeTrackingInput!) {
    updateTimeTracking(id: $id, input: $input) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ timeTracking }) => {
  const { addMessage } = useFlash();
  const [updateTimeTracking, { loading, error }] = useMutation(UPDATE_TIME_TRACKING_MUTATION, {
    onCompleted: () => {
      navigate(routes.timeTrackings());
      addMessage('TimeTracking updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { clientId: parseInt(input.clientId) });
    updateTimeTracking({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TimeTracking {timeTracking.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TimeTrackingForm timeTracking={timeTracking} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};

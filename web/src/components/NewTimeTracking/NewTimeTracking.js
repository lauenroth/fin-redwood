import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import TimeTrackingForm from 'src/components/TimeTrackingForm';

const CREATE_TIME_TRACKING_MUTATION = gql`
  mutation CreateTimeTrackingMutation($input: CreateTimeTrackingInput!) {
    createTimeTracking(input: $input) {
      id
    }
  }
`;

const NewTimeTracking = () => {
  const { addMessage } = useFlash();
  const [createTimeTracking, { loading, error }] = useMutation(CREATE_TIME_TRACKING_MUTATION, {
    onCompleted: () => {
      navigate(routes.timeTrackings());
      addMessage('TimeTracking created.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = input => {
    const castInput = Object.assign(input, { clientId: parseInt(input.clientId) });
    createTimeTracking({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TimeTracking</h2>
      </header>
      <div className="rw-segment-main">
        <TimeTrackingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewTimeTracking;

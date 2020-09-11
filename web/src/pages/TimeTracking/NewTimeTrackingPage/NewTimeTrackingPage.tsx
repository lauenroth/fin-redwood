import { useMutation, useQuery } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import { sortBy } from 'lodash';
import MainLayout from 'src/layouts/MainLayout';
import TimeTrackingForm from 'src/components/TimeTrackingForm/TimeTrackingForm';

const CLIENT_LIST = gql`
  query CLIENTS {
    clients {
      id
      name
    }
  }
`;

const CREATE_TIME_TRACKING_MUTATION = gql`
  mutation CreateTimeTrackingMutation($input: CreateTimeTrackingInput!) {
    createTimeTracking(input: $input) {
      id
    }
  }
`;

const NewTimeTrackingPage = (): JSX.Element => {
  const { data } = useQuery(CLIENT_LIST);

  const [createTimeTracking, { loading, error }] = useMutation(CREATE_TIME_TRACKING_MUTATION, {
    onCompleted: () => {
      navigate(routes.timeTrackings());
    },
  });

  const onSave = input => {
    const castInput = Object.assign(input, { clientId: parseInt(input.clientId) });
    createTimeTracking({ variables: { input: castInput } });
  };

  return (
    <MainLayout title="New Time Tracking" hasPadding hasBackButton>
      <TimeTrackingForm onSave={onSave} loading={loading} error={error} clients={sortBy(data?.clients, ['name'])} />
    </MainLayout>
  );
};

export default NewTimeTrackingPage;

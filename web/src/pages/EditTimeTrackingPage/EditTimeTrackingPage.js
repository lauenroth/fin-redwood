import TimeTrackingsLayout from 'src/layouts/TimeTrackingsLayout';
import EditTimeTrackingCell from 'src/components/EditTimeTrackingCell';

const EditTimeTrackingPage = ({ id }) => {
  return (
    <TimeTrackingsLayout>
      <EditTimeTrackingCell id={id} />
    </TimeTrackingsLayout>
  );
};

export default EditTimeTrackingPage;

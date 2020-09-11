import TimeTrackingsLayout from 'src/layouts/TimeTrackingsLayout';
import TimeTrackingCell from 'src/components/TimeTrackingCell';

const TimeTrackingPage = ({ id }) => {
  return (
    <TimeTrackingsLayout>
      <TimeTrackingCell id={id} />
    </TimeTrackingsLayout>
  );
};

export default TimeTrackingPage;

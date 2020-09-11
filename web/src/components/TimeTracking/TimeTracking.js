import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_TIME_TRACKING_MUTATION = gql`
  mutation DeleteTimeTrackingMutation($id: Int!) {
    deleteTimeTracking(id: $id) {
      id
    }
  }
`;

const jsonDisplay = obj => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = datetime => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = checked => {
  return <input type="checkbox" checked={checked} disabled />;
};

const TimeTracking = ({ timeTracking }) => {
  const { addMessage } = useFlash();
  const [deleteTimeTracking] = useMutation(DELETE_TIME_TRACKING_MUTATION, {
    onCompleted: () => {
      navigate(routes.timeTrackings());
      addMessage('TimeTracking deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete timeTracking ' + id + '?')) {
      deleteTimeTracking({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">TimeTracking {timeTracking.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{timeTracking.id}</td>
            </tr>
            <tr>
              <th>Client id</th>
              <td>{timeTracking.clientId}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(timeTracking.date)}</td>
            </tr>
            <tr>
              <th>Hours</th>
              <td>{timeTracking.hours}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(timeTracking.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editTimeTracking({ id: timeTracking.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <a href="#" className="rw-button rw-button-red" onClick={() => onDeleteClick(timeTracking.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

export default TimeTracking;

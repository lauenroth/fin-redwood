import { Formik } from 'formik';
import { InputLabel, Select, MenuItem, Slider, TextField } from '@material-ui/core';

const timeMarks = [
  { value: 1, label: '' },
  { value: 2, label: '2' },
  { value: 3, label: '' },
  { value: 4, label: '4' },
  { value: 5, label: '' },
  { value: 6, label: '6' },
  { value: 7, label: '' },
  { value: 8, label: '8' },
  { value: 9, label: '' },
  { value: 10, label: '10' },
  { value: 11, label: '' },
];

const TimeTrackingForm = props => {
  const onSubmit = data => {
    const timeTracking = { ...data };
    timeTracking.date = new Date(timeTracking.date);
    console.log(timeTracking);
    props.onSave(timeTracking, props?.timeTracking?.id);
  };

  const { clients, timeTracking } = props;
  let initialValues = timeTracking;

  if (initialValues) {
    delete initialValues.id;
    delete initialValues.createdAt;
    delete initialValues.updatedAt;
    delete initialValues.__typename;
  } else {
    initialValues = { clientId: '2', hours: 8, date: '2020-09-01' };
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <InputLabel id="clientId-label">Client</InputLabel>
          <Select
            id="clientId"
            label="Client"
            name="clientId"
            labelId="clientId-label"
            value={values?.clientId}
            onChange={handleChange}
          >
            {clients.map(client => (
              <MenuItem key={`client-${client.id}`} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>

          <TextField
            id="date"
            name="date"
            label="Date"
            type="date"
            defaultValue={values.date}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <InputLabel id="hour-label">Hours</InputLabel>
          <Slider
            labelId="hours-label"
            defaultValue={values.hours}
            name="hours"
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={timeMarks}
            min={1}
            max={11}
            onChange={handleChange}
          />

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </Formik>
  );
};

export default TimeTrackingForm;

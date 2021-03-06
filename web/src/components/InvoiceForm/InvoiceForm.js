import { Formik } from 'formik';
import { Select, MenuItem, InputLabel, TextField, FormLabel, Icon, FormControl } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

const InvoiceForm = props => {
  const onSubmit = data => {
    const invoice = { ...data };
    invoice.date = new Date(invoice.date);
    console.log(invoice);

    props.onSave(invoice, data.id);
  };

  const { clients, invoice } = props;
  let initialValues = invoice;

  if (initialValues) {
    delete initialValues.id;
    delete initialValues.createdAt;
    delete initialValues.updatedAt;
    delete initialValues.__typename;
  } else {
    initialValues = { clientId: '2', number: '2020-0006', date: '2020-09-01', total: 0.0 };
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <InputLabel id="clientId-label">Client</InputLabel>
          <Select
            id="clientId"
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
            id="number"
            name="number"
            label="Number"
            type="text"
            defaultValue={values.number}
            onChange={handleChange}
          />

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

          <FormControl>
            <FormLabel>Items</FormLabel>

            <AddBoxIcon style={{ alignSelf: 'flex-end' }} />
          </FormControl>

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </Formik>
  );
};

export default InvoiceForm;

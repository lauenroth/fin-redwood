import { Formik } from 'formik';
import { Select, MenuItem, InputLabel, TextField } from '@material-ui/core';

const InvoiceForm = props => {
  const onSubmit = data => {
    props.onSave(data, props?.invoice?.id);
  };

  const { clients } = props;
  console.log(clients);

  return (
    <Formik initialValues={props.invoice} onSubmit={onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <InputLabel id="clientId-label">Client</InputLabel>
          <Select id="clientId" labelId="clientId-label" value={values?.clientId} onChange={handleChange}>
            {clients.map(client => (
              <MenuItem key={`client-${client.id}`} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>

          <TextField
            id="number"
            label="Number"
            type="text"
            defaultValue="2020-0006"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2020-09-01"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </Formik>
    // <div className="rw-form-wrapper">
    //   <Form onSubmit={onSubmit} error={props.error}>
    //     <FormError
    //       error={props.error}
    //       wrapperClassName="rw-form-error-wrapper"
    //       titleClassName="rw-form-error-title"
    //       listClassName="rw-form-error-list"
    //     />

    //     <Label name="number" className="rw-label" errorClassName="rw-label rw-label-error">
    //       Number
    //     </Label>
    //     <TextField
    //       name="number"
    //       defaultValue={props.invoice?.number}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ required: true }}
    //     />
    //     <FieldError name="number" className="rw-field-error" />

    //     <Label name="date" className="rw-label" errorClassName="rw-label rw-label-error">
    //       Date
    //     </Label>
    //     <TextField
    //       name="date"
    //       defaultValue={props.invoice?.date}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ required: true }}
    //     />
    //     <FieldError name="date" className="rw-field-error" />

    //     <Label name="clientId" className="rw-label" errorClassName="rw-label rw-label-error">
    //       Client id
    //     </Label>
    //     <NumberField
    //       name="clientId"
    //       defaultValue={props.invoice?.clientId}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ required: true }}
    //     />
    //     <FieldError name="clientId" className="rw-field-error" />

    //     <Label name="items" className="rw-label" errorClassName="rw-label rw-label-error">
    //       Items
    //     </Label>
    //     <TextAreaField
    //       name="items"
    //       defaultValue={JSON.stringify(props.invoice?.items)}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ required: true }}
    //       dataType="Json"
    //     />
    //     <FieldError name="items" className="rw-field-error" />

    //     <Label name="total" className="rw-label" errorClassName="rw-label rw-label-error">
    //       Total
    //     </Label>
    //     <TextField
    //       name="total"
    //       defaultValue={props.invoice?.total}
    //       className="rw-input"
    //       errorClassName="rw-input rw-input-error"
    //       validation={{ required: true }}
    //       dataType="Float"
    //     />
    //     <FieldError name="total" className="rw-field-error" />

    //     <div className="rw-button-group">
    //       <Submit disabled={props.loading} className="rw-button rw-button-blue">
    //         Save
    //       </Submit>
    //     </div>
    //   </Form>
    // </div>
  );
};

export default InvoiceForm;

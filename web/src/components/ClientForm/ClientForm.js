// import { FieldError, TextField, NumberField, Submit } from '@redwoodjs/web';
// import { TextField } from '@redwoodjs/forms';
import { Formik } from 'formik';

const ClientForm = props => {
  const onSubmit = data => {
    const client = { ...data };
    delete client.id;
    delete client.createdAt;
    delete client.updatedAt;
    delete client.__typename;
    props.onSave(client, data.id);
  };

  return (
    <Formik initialValues={props.client} onSubmit={onSubmit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          {/* <FormError
            error={props.error}
            wrapperClassName="rw-form-error-wrapper"
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
          /> */}

          <label name="name">Name</label>
          <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values?.name} required />

          <label name="address">Address</label>
          <textarea name="address" onChange={handleChange} onBlur={handleBlur}>
            {values?.address}
          </textarea>

          <label name="email">E-Mail</label>
          <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values?.email} />

          <label name="phone">Phone</label>
          <input type="phone" name="phone" onChange={handleChange} onBlur={handleBlur} value={values?.phone} />

          <label name="website">Website</label>
          <input type="url" name="website" onChange={handleChange} onBlur={handleBlur} value={values?.website} />

          <label name="vat">VAT</label>
          <input type="text" name="vat" onChange={handleChange} onBlur={handleBlur} value={values?.vat} />

          <label name="notes">Notes</label>
          <textarea name="notes" onChange={handleChange} onBlur={handleBlur}>
            {values?.notes}
          </textarea>

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ClientForm;

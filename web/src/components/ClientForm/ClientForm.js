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
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <label name="name">Name</label>
          <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} required />

          <label name="address">Address</label>
          <textarea name="address" rows={4} onChange={handleChange} onBlur={handleBlur} value={values.address || ''} />

          <label name="email">E-Mail</label>
          <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email || ''} />

          <label name="phone">Phone</label>
          <input type="phone" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone || ''} />

          <label name="website">Website</label>
          <input type="url" name="website" onChange={handleChange} onBlur={handleBlur} value={values.website || ''} />

          <label name="vat">VAT</label>
          <input type="text" name="vat" onChange={handleChange} onBlur={handleBlur} value={values.vat || ''} />

          <label name="notes">Notes</label>
          <textarea name="notes" rows={4} onChange={handleChange} onBlur={handleBlur} value={values.notes || ''} />

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ClientForm;

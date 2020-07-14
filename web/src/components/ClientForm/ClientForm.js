import { Form, FormError, FieldError, Label, TextField, NumberField, Submit } from '@redwoodjs/web';

const ClientForm = props => {
  const onSubmit = data => {
    props.onSave(data, props?.client?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label name="name" className="rw-label" errorClassName="rw-label rw-label-error">
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.client?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label name="address" className="rw-label" errorClassName="rw-label rw-label-error">
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.client?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="address" className="rw-field-error" />

        <Label name="email" className="rw-label" errorClassName="rw-label rw-label-error">
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.client?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="email" className="rw-field-error" />

        <Label name="phone" className="rw-label" errorClassName="rw-label rw-label-error">
          Phone
        </Label>
        <TextField
          name="phone"
          defaultValue={props.client?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="phone" className="rw-field-error" />

        <Label name="website" className="rw-label" errorClassName="rw-label rw-label-error">
          Website
        </Label>
        <TextField
          name="website"
          defaultValue={props.client?.website}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="website" className="rw-field-error" />

        <Label name="vat" className="rw-label" errorClassName="rw-label rw-label-error">
          Vat
        </Label>
        <NumberField
          name="vat"
          defaultValue={props.client?.vat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="vat" className="rw-field-error" />

        <Label name="notes" className="rw-label" errorClassName="rw-label rw-label-error">
          Notes
        </Label>
        <TextField
          name="notes"
          defaultValue={props.client?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="notes" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default ClientForm;

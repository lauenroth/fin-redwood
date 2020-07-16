import { Form, FormError, FieldError, Label, TextField, Submit } from '@redwoodjs/web';

const TransactionForm = props => {
  const onSubmit = data => {
    props.onSave(data, props?.transaction?.id);
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

        <Label name="date" className="rw-label" errorClassName="rw-label rw-label-error">
          Date
        </Label>
        <TextField
          name="date"
          defaultValue={props.transaction?.date}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="date" className="rw-field-error" />

        <Label name="payee" className="rw-label" errorClassName="rw-label rw-label-error">
          Payee
        </Label>
        <TextField
          name="payee"
          defaultValue={props.transaction?.payee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="payee" className="rw-field-error" />

        <Label name="amount" className="rw-label" errorClassName="rw-label rw-label-error">
          Amount
        </Label>
        <TextField
          name="amount"
          defaultValue={props.transaction?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="amount" className="rw-field-error" />

        <Label name="type" className="rw-label" errorClassName="rw-label rw-label-error">
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.transaction?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        <Label name="foreignAmount" className="rw-label" errorClassName="rw-label rw-label-error">
          Foreign amount
        </Label>
        <TextField
          name="foreignAmount"
          defaultValue={props.transaction?.foreignAmount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="foreignAmount" className="rw-field-error" />

        <Label name="foreignCurrency" className="rw-label" errorClassName="rw-label rw-label-error">
          Foreign currency
        </Label>
        <TextField
          name="foreignCurrency"
          defaultValue={props.transaction?.foreignCurrency}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="foreignCurrency" className="rw-field-error" />

        <Label name="category" className="rw-label" errorClassName="rw-label rw-label-error">
          Category
        </Label>
        <TextField
          name="category"
          defaultValue={props.transaction?.category}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="category" className="rw-field-error" />

        <Label name="vat" className="rw-label" errorClassName="rw-label rw-label-error">
          Vat
        </Label>
        <TextField
          name="vat"
          defaultValue={props.transaction?.vat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="vat" className="rw-field-error" />

        <Label name="reference" className="rw-label" errorClassName="rw-label rw-label-error">
          Reference
        </Label>
        <TextField
          name="reference"
          defaultValue={props.transaction?.reference}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="reference" className="rw-field-error" />

        <Label name="description" className="rw-label" errorClassName="rw-label rw-label-error">
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.transaction?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label name="import" className="rw-label" errorClassName="rw-label rw-label-error">
          Import
        </Label>
        <TextField
          name="import"
          defaultValue={props.transaction?.import}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="import" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default TransactionForm;

import { Form, FormError, FieldError, Label, Submit } from '@redwoodjs/web';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const TransactionForm = props => {
  const onSubmit = data => {
    props.onSave(data, props?.transaction?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <TextField
          name="date"
          label="Date"
          defaultValue={props.transaction?.date}
          variant="filled"
          autoComplete="false"
        />

        <TextField label="Payee" name="payee" defaultValue={props.transaction?.payee} variant="filled" />

        <TextField label="Amount" name="amount" defaultValue={props.transaction?.amount} variant="filled" />

        <TextField label="Type" name="type" defaultValue={props.transaction?.type} variant="filled" />

        <TextField
          label="Amount in foreign currency"
          name="foreignAmount"
          defaultValue={props.transaction?.foreignAmount}
          variant="filled"
        />

        <TextField
          label="Foreign currency"
          name="foreignCurrency"
          defaultValue={props.transaction?.foreignCurrency}
          variant="filled"
        />

        <TextField label="Category" name="category" defaultValue={props.transaction?.category} variant="filled" />

        <FormControl variant="filled">
          <InputLabel id="vat-label">VAT</InputLabel>
          <Select labelId="vat-label" id="vat" value={props.transaction?.vat} onChange={value => console.log(value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={19}>19%</MenuItem>
            <MenuItem value={21}>21%</MenuItem>
          </Select>
        </FormControl>

        <TextField label="Reference" name="reference" defaultValue={props.transaction?.reference} variant="filled" />

        <TextField
          label="Description"
          name="description"
          defaultValue={props.transaction?.description}
          variant="filled"
        />

        {/* <TextField name="import" defaultValue={props.transaction?.import} variant="filled" /> */}

        <Button color="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default TransactionForm;

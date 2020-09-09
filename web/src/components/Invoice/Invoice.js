import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';
import styled, { css } from 'styled-components';
import TimeHelper from 'src/helpers/TimeHelper';

const DELETE_INVOICE_MUTATION = gql`
  mutation DeleteInvoiceMutation($id: Int!) {
    deleteInvoice(id: $id) {
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

const Invoice = ({ invoice }) => {
  const { addMessage } = useFlash();
  const [deleteInvoice] = useMutation(DELETE_INVOICE_MUTATION, {
    onCompleted: () => {
      navigate(routes.invoices());
      addMessage('Invoice deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete invoice ' + id + '?')) {
      deleteInvoice({ variables: { id } });
    }
  };

  return (
    <>
      <Details>
        <h4>{invoice.client.name}</h4>
        <dl>
          <dt>Number:</dt>
          <dd>{invoice.number}</dd>
          <dt>Date:</dt>
          <dd>{TimeHelper.getDate(invoice.date)}</dd>
        </dl>
        {invoice.items && <p>{jsonDisplay(invoice.items)}</p>}
        <Total>Total: {invoice.total} EUR</Total>
      </Details>
      <nav className="rw-button-group">
        <Link to={routes.editInvoice({ id: invoice.id })} className="button">
          Edit
        </Link>
        <a href="#" className="button danger" onClick={() => onDeleteClick(invoice.id)}>
          Delete
        </a>
      </nav>
    </>
  );
};

const Details = styled.section`
  ${props => css`
    background-color: #fff;
    border-radius: 4px;
    color: ${props.theme.colors.backgroundSecondary};
    margin-bottom: 20px;
    padding: 15px;

    h4 {
      font-size: 22px;
      font-weight: normal;
      margin: 0;
    }
  `}
`;

const Total = styled.p`
  font-size: 22px;
  margin: 0;
  text-align: right;
  width: 100%;
`;

export default Invoice;

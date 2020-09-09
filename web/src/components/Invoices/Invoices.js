// import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import styled, { css } from 'styled-components';
import TimeHelper from 'src/helpers/TimeHelper';

// const DELETE_INVOICE_MUTATION = gql`
//   mutation DeleteInvoiceMutation($id: Int!) {
//     deleteInvoice(id: $id) {
//       id
//     }
//   }
// `;

const InvoicesList = ({ invoices }) => {
  // const { addMessage } = useFlash();
  // const [deleteInvoice] = useMutation(DELETE_INVOICE_MUTATION, {
  //   onCompleted: () => {
  //     addMessage('Invoice deleted.', { classes: 'rw-flash-success' });
  //   },
  // });

  // const onDeleteClick = id => {
  //   if (confirm('Are you sure you want to delete invoice ' + id + '?')) {
  //     deleteInvoice({ variables: { id }, refetchQueries: ['INVOICES'] });
  //   }
  // };

  const image = client => {
    if (client.name === 'Worldia') return 'worldia.png';
    if (client.name === 'In The Pocket') return 'itp.png';
    if (client.name === 'Init AG') return 'init.jpeg';
  };

  return (
    <Invoices>
      {invoices.map(invoice => (
        <li key={invoice.id} onClick={() => navigate(routes.invoice({ id: invoice.id }))}>
          <Status>
            <span>{invoice.status}</span>
          </Status>
          <img src={`/images/clients/${image(invoice.client)}`} alt="" />
          <div>
            <h4>{invoice.client.name}</h4>
            <Date>{TimeHelper.getDate(invoice.date)}</Date>
          </div>
        </li>
      ))}
    </Invoices>
  );
};

const Invoices = styled.ul`
  ${props => css`
    margin: 0;
    padding: 0;

    li {
      align-items: center;
      background-color: #fff;
      border-radius: 4px;
      color: ${props.theme.colors.backgroundSecondary};
      display: flex;
      list-style: none;
      margin-bottom: 20px;
      padding: 0 15px;
      position: relative;

      img {
        border-radius: 50%;
        height: 45px;
        margin-right: 15px;
        width: 45px;
      }

      div {
        display: flex;
        height: 70px;
        flex-direction: column;
        justify-content: center;

        width: 100%;
      }
    }

    h4 {
      font-size: 15px;
      font-weight: normal;
      margin: 0 0 2px;
    }
  `}
`;

const Status = styled.p`
  height: 55px;
  margin: 0;
  overflow: hidden;
  position: absolute;
  right: -4px;
  top: -4px;
  width: 55px;

  &::before,
  &::after {
    border: 3px solid #2980b9;
    border-top-color: transparent;
    border-right-color: transparent;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }

  span {
    position: absolute;
    display: block;
    width: 80px;
    padding: 5px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 10px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
    left: -6px;
    top: 8px;
    transform: rotate(45deg);
  }
`;

const Date = styled.p`
  ${props => css`
    color: ${props.theme.colors.textSecondary};
    font-size: 12px;
    margin: 0;
  `}
`;

export default InvoicesList;

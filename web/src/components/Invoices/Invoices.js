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

const Date = styled.p`
  ${props => css`
    color: ${props.theme.colors.textSecondary};
    font-size: 12px;
    margin: 0;
  `}
`;

export default InvoicesList;

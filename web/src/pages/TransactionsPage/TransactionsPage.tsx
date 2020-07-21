import React from 'react';
import styled from 'styled-components';
import { navigate, routes } from '@redwoodjs/router';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BackupIcon from '@material-ui/icons/Backup';
import MainLayout from 'src/layouts/MainLayout';

const transactions = [
  {
    title: 'Train ticket',
    amount: 19.9,
    date: '24.06.2020',
  },
  {
    title: 'Business lunch',
    amount: 39.0,
    date: '24.06.2020',
  },
  {
    title: 'Internet',
    amount: 34.99,
    date: '23.06.2020',
  },
  {
    title: 'Mobile phone subscription',
    amount: 9.99,
    date: '22.06.2020',
  },
  {
    title: 'Office rent',
    amount: 280.0,
    date: '20.06.2020',
  },
  {
    title: 'Macbook Pro',
    amount: 2699.99,
    date: '20.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
];

const TransactionsPage = () => {
  const [open, setOpen] = React.useState(false);

  const actions = [
    { icon: <ImportExportIcon />, name: 'Add transaction', action: () => navigate(routes.newTransaction()) },
    { icon: <ReceiptIcon />, name: 'Add receipt' },
    { icon: <BackupIcon />, name: 'Upload transactions', action: () => navigate(routes.transactionImport()) },
  ];

  return (
    <MainLayout title="Transactions">
      <Transactions>
        {transactions.map((transaction, index) => (
          <li key={`transaction-${index}`}>
            <h4>
              {transaction.title} <div>{transaction.date}</div>
            </h4>
            <Amount>-{transaction.amount.toFixed(2)} €</Amount>
          </li>
        ))}
      </Transactions>

      <SpeedDial
        ariaLabel="Sub menu"
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              if (action.action) {
                action.action();
              }
              setOpen(false);
            }}
          />
        ))}
      </SpeedDial>
    </MainLayout>
  );
};

const Transactions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    background-color: rgb(45, 55, 72);
    border-bottom: 1px solid #1a202c;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;
  }

  h4 {
    font-weight: normal;

    div {
      color: #999;
      font-size: 13px;
      margin-top: 4px;
    }
  }
`;

const Amount = styled.div`
  color: #e33;
`;

export default TransactionsPage;

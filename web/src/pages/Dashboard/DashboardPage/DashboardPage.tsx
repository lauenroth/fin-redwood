import React from 'react';
import { navigate, routes } from '@redwoodjs/router';
import styled from 'styled-components';
import MainLayout from 'src/layouts/MainLayout';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReceiptIcon from '@material-ui/icons/Receipt';
import TimerIcon from '@material-ui/icons/Timer';

const actions = [
  { icon: <ImportExportIcon />, name: 'Add transaction', action: () => navigate(routes.newTransaction()) },
  { icon: <ReceiptIcon />, name: 'Add receipt' },
  { icon: <TimerIcon />, name: 'Track time' },
];

const DashboardPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <MainLayout title="Dashboard" hasPadding>
      <Finny>Welcome to Finny!</Finny>

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

const Finny = styled.h1`
  font-family: Lobster, Verdana, Geneva, Tahoma, sans-serif;
`;

export default DashboardPage;

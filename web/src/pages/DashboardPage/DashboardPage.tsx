import React from 'react';
import styled from 'styled-components';
import MainLayout from 'src/layouts/MainLayout';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReceiptIcon from '@material-ui/icons/Receipt';
import TimerIcon from '@material-ui/icons/Timer';

const actions = [
  { icon: <ImportExportIcon />, name: 'Add transaction' },
  { icon: <ReceiptIcon />, name: 'Add receipt' },
  { icon: <TimerIcon />, name: 'Track time' },
];

const DashboardPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <MainLayout title="Dashboard" hasPadding>
      <Finny>Welcome to Finny!</Finny>

      <Logo>
        <div>Finny</div>
      </Logo>

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
            onClick={() => setOpen(false)}
          />
        ))}
      </SpeedDial>
    </MainLayout>
  );
};

const Finny = styled.h1`
  font-family: Lobster, Verdana, Geneva, Tahoma, sans-serif;
`;

const Logo = styled.div`
  align-items: center;
  border: 5px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: Lobster, Verdana, Geneva, Tahoma, sans-serif;
  font-size: 70px;
  height: 200px;
  justify-content: center;
  margin: auto;
  width: 200px;

  svg {
    font-size: 60px;
  }
`;

export default DashboardPage;

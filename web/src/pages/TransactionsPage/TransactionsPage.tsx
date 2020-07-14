import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BackupIcon from '@material-ui/icons/Backup';
import MainLayout from 'src/layouts/MainLayout';

const actions = [
  { icon: <ImportExportIcon />, name: 'Add transaction' },
  { icon: <ReceiptIcon />, name: 'Add receipt' },
  { icon: <BackupIcon />, name: 'Upload transactions' },
];

const TransactionsPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <MainLayout title="Transactions">
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

export default TransactionsPage;

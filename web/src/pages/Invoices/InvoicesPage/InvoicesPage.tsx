import MainLayout from 'src/layouts/MainLayout';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { navigate, routes } from '@redwoodjs/router';

const InvoicesPage = () => {
  return (
    <MainLayout title="Invoices" hasPadding>
      No invoices yet
      <Fab color="primary" onClick={() => navigate(routes.newInvoice())}>
        <AddIcon />
      </Fab>
    </MainLayout>
  );
};

export default InvoicesPage;

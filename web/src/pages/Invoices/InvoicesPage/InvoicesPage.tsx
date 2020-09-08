import MainLayout from 'src/layouts/MainLayout';
import { navigate, routes } from '@redwoodjs/router';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InvoicesCell from 'src/components/InvoicesCell';

const InvoicesPage = () => {
  return (
    <MainLayout title="Invoices" hasPadding>
      <InvoicesCell />
      <Fab color="primary" onClick={() => navigate(routes.newInvoice())}>
        <AddIcon />
      </Fab>
    </MainLayout>
  );
};

export default InvoicesPage;

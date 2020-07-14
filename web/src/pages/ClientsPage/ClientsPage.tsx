import { Fab } from '@material-ui/core';
import MainLayout from 'src/layouts/MainLayout';
import AddIcon from '@material-ui/icons/Add';
import { navigate, routes } from '@redwoodjs/router';
import Clients from 'src/components/ClientsCell';

const ClientsPage = () => {
  return (
    <MainLayout title="Clients" hasPadding>
      <Clients />
      <Fab color="primary" onClick={() => navigate(routes.newClient())}>
        <AddIcon />
      </Fab>
    </MainLayout>
  );
};

export default ClientsPage;

import MainLayout from 'src/layouts/MainLayout';
import ClientCell from 'src/components/ClientCell';

const ClientPage = ({ id }) => {
  return (
    <MainLayout title="Clients" hasPadding hasBackButton>
      <ClientCell id={id} />
    </MainLayout>
  );
};

export default ClientPage;

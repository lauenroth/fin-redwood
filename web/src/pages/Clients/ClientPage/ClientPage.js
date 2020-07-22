import MainLayout from 'src/layouts/MainLayout';
import ClientCell from 'src/components/ClientCell';

const ClientPage = ({ id }) => {
  return (
    <MainLayout>
      <ClientCell id={id} />
    </MainLayout>
  );
};

export default ClientPage;

import ClientsLayout from 'src/pages/Clients/NewClientPage/node_modules/src/layouts/ClientsLayout';
import EditClientCell from 'src/components/EditClientCell';

const EditClientPage = ({ id }) => {
  return (
    <ClientsLayout>
      <EditClientCell id={id} />
    </ClientsLayout>
  );
};

export default EditClientPage;

import MainLayout from 'src/layouts/MainLayout';
import EditClientCell from 'src/components/EditClientCell';

const EditClientPage = ({ id }) => {
  return (
    <MainLayout>
      <EditClientCell id={id} />
    </MainLayout>
  );
};

export default EditClientPage;

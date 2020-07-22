import MainLayout from 'src/layouts/MainLayout';
import EditTransactionCell from 'src/components/EditTransactionCell';

const EditTransactionPage = ({ id }) => {
  return (
    <MainLayout>
      <EditTransactionCell id={id} />
    </MainLayout>
  );
};

export default EditTransactionPage;

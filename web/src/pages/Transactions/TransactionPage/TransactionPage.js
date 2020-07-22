import MainLayout from 'src/layouts/MainLayout';
import TransactionCell from 'src/components/TransactionCell';

const TransactionPage = ({ id }) => {
  return (
    <MainLayout>
      <TransactionCell id={id} />
    </MainLayout>
  );
};

export default TransactionPage;

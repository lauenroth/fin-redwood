import MainLayout from 'src/layouts/MainLayout';
import NewTransaction from 'src/components/NewTransaction';

const NewTransactionPage = () => {
  return (
    <MainLayout title="New Transaction" hasPadding hasBackButton>
      <NewTransaction />
    </MainLayout>
  );
};

export default NewTransactionPage;

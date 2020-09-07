import MainLayout from 'src/layouts/MainLayout';
import NewInvoice from 'src/components/NewInvoice/NewInvoice';

const NewInvoicePage = () => {
  return (
    <MainLayout title="New Invoice" hasBackButton hasPadding>
      <NewInvoice />
    </MainLayout>
  );
};

export default NewInvoicePage;

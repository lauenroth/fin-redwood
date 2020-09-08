import MainLayout from 'src/layouts/MainLayout';
import InvoiceCell from 'src/components/InvoiceCell';

const InvoicePage = ({ id }) => {
  return (
    <MainLayout title="Invoice Details" hasBackButton hasPadding>
      <InvoiceCell id={id} />
    </MainLayout>
  );
};

export default InvoicePage;

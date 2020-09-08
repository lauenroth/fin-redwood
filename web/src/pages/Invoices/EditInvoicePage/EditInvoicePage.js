import MainLayout from 'src/layouts/MainLayout';
import EditInvoiceCell from 'src/components/EditInvoiceCell';

const EditInvoicePage = ({ id }) => {
  return (
    <MainLayout>
      <EditInvoiceCell id={id} />
    </MainLayout>
  );
};

export default EditInvoicePage;

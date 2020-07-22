import MainLayout from 'src/layouts/MainLayout';
import NewClient from 'src/components/NewClient';

const NewClientPage = () => {
  return (
    <MainLayout title="New Client" hasPadding hasBackButton>
      <NewClient />
    </MainLayout>
  );
};

export default NewClientPage;

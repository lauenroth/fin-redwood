import styled from 'styled-components';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MainLayout from 'src/layouts/MainLayout';

const DashboardPage = () => {
  return (
    <MainLayout title="Dashboard" hasPadding>
      <Finny>Welcome to Finny!</Finny>

      <Logo>
        {/* <TrendingUpIcon /> */}
        <div>Finny</div>
      </Logo>
    </MainLayout>
  );
};

const Finny = styled.h1`
  font-family: Lobster, Verdana, Geneva, Tahoma, sans-serif;
`;

const Logo = styled.div`
  align-items: center;
  border: 5px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: Lobster, Verdana, Geneva, Tahoma, sans-serif;
  font-size: 70px;
  height: 200px;
  justify-content: center;
  width: 200px;

  svg {
    font-size: 60px;
  }
`;

export default DashboardPage;

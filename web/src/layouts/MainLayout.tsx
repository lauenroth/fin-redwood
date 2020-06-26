import React from 'react';
import styled from 'styled-components';
import { routes, navigate } from '@redwoodjs/router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TimerIcon from '@material-ui/icons/Timer';
import ReceiptIcon from '@material-ui/icons/Receipt';

interface Props {}

const MainLayout: React.FC<Props> = ({ children }) => {
  const path = window.location.pathname.substr(1);

  const [currentPage, setCurrentPage] = React.useState(path.length ? path : 'timeTracking');

  const handleChange = (event: React.ChangeEvent<{}>, newPage: string) => {
    setCurrentPage(newPage);
    navigate(routes[newPage]());
  };

  return (
    <Wrapper>
      {children}
      <BottomNavigation value={currentPage} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Time Tracking" value="timeTracking" icon={<TimerIcon />} />
        <BottomNavigationAction label="Receipts" value="receipts" icon={<ReceiptIcon />} />
      </BottomNavigation>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;

  > :last-child {
    margin-top: auto;
  }

  .MuiBottomNavigation-root {
    background-color: rgba(45, 55, 72, 0.6);
  }

  .MuiBottomNavigationAction-root {
    color: #a0aec0;
    opacity: 0.7;
    transition: 0.25s;
  }

  .MuiBottomNavigationAction-root.Mui-selected {
    color: #dbdbdb;
    opacity: 1;
  }
`;

export default MainLayout;

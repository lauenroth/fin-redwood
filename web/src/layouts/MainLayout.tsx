import React from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { routes, navigate } from '@redwoodjs/router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TimerIcon from '@material-ui/icons/Timer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TuneIcon from '@material-ui/icons/Tune';

interface Props {
  title: string;
}

const MainLayout: React.FC<Props> = ({ children, title }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  const [showNavigation, setShowNavigation] = React.useState(false);

  const path = window.location.pathname.substr(1);
  const [currentPage, setCurrentPage] = React.useState(path.length ? path : 'timeTracking');

  const handleChange = (event: React.ChangeEvent<{}>, newPage: string) => {
    setCurrentPage(newPage);
    navigate(routes[newPage]());
  };

  return (
    <Wrapper isMobile={isTabletOrMobileDevice}>
      <AppBar position="fixed">
        <Toolbar>
          {!isTabletOrMobileDevice && (
            <IconButton color="inherit" aria-label="open drawer" onClick={() => setShowNavigation(true)} edge="start">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        // variant="permanent"
        open={showNavigation}
        onOpen={() => setShowNavigation(true)}
        onClose={() => setShowNavigation(false)}
      >
        <div>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={event => handleChange(event, 'transactions')}>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItem>
          <ListItem button onClick={event => handleChange(event, 'receipts')}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Receipts" />
          </ListItem>
          <ListItem button onClick={event => handleChange(event, 'timeTracking')}>
            <ListItemIcon>
              <TimerIcon />
            </ListItemIcon>
            <ListItemText primary="Time Tracking" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={event => handleChange(event, 'clients')}>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>
          <ListItem disabled>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={event => handleChange(event, 'settings')}>
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </SwipeableDrawer>
      {children}
      {isTabletOrMobileDevice && (
        <BottomNavigation value={currentPage} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Time Tracking" value="timeTracking" icon={<TimerIcon />} />
          <BottomNavigationAction label="Receipts" value="receipts" icon={<ReceiptIcon />} />
        </BottomNavigation>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main<{ isMobile: boolean }>`
  ${({ isMobile }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: ${isMobile ? '800px' : '2100px'};
    padding-top: ${isMobile ? '56px' : '64px'};
    width: 100%;

    > :last-child {
      margin-top: auto;
    }

    .MuiAppBar-root,
    .MuiBottomNavigation-root {
      background-color: rgba(45, 55, 72, 0.8);
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

    .MuiSpeedDial-root {
      bottom: 20px;
      position: fixed;
      right: 20px;
    }
  `}
`;

const MainHeader = styled.header`
  h1 {
    font-size: 24px;
    font-weight: normal;
    text-align: center;
  }
`;

export { MainHeader };

export default MainLayout;

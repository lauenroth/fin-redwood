import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { routes, navigate } from '@redwoodjs/router';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TuneIcon from '@material-ui/icons/Tune';
import TimerIcon from '@material-ui/icons/Timer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

interface Props {
  showNavigation: boolean;
  setShowNavigation(show: boolean): void;
}

const MainNavigation: React.FC<Props> = ({ showNavigation, setShowNavigation }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  const path = window.location.pathname.substr(1);
  const [currentPage, setCurrentPage] = React.useState(path.length ? path : 'timeTracking');

  const handleChange = (event: React.ChangeEvent<{}>, newPage: string) => {
    setCurrentPage(newPage);
    navigate(routes[newPage]());
  };

  return (
    <SwipeableDrawer
      anchor={isTabletOrMobileDevice ? 'right' : 'left'}
      // variant="permanent"
      open={showNavigation}
      onOpen={() => setShowNavigation(true)}
      onClose={() => setShowNavigation(false)}
    >
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
  );
};

export default MainNavigation;

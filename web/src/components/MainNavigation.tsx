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
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import DescriptionIcon from '@material-ui/icons/Description';

interface Props {
  showNavigation: boolean;
  setShowNavigation(show: boolean): void;
}

const MainNavigation: React.FC<Props> = ({ showNavigation, setShowNavigation }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  const handleChange = (event: React.ChangeEvent<{}>, newPage: string) => {
    navigate(routes[newPage]());
  };

  return (
    <SwipeableDrawer
      anchor={isTabletOrMobileDevice ? 'right' : 'left'}
      // variant={isTabletOrMobileDevice ? 'persistent' : 'permanent'}
      open={showNavigation}
      onOpen={() => setShowNavigation(true)}
      onClose={() => setShowNavigation(false)}
    >
      <List>
        <ListItem button onClick={event => handleChange(event, 'dashboard')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={event => handleChange(event, 'transactions')}>
          <ListItemIcon>
            <ImportExportIcon />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button onClick={event => handleChange(event, 'timeTrackings')}>
          <ListItemIcon>
            <TimerIcon />
          </ListItemIcon>
          <ListItemText primary="Time Tracking" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={event => handleChange(event, 'invoices')}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItem>
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

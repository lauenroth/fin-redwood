import { Router, Route } from '@redwoodjs/router';
import ClientsPage from 'src/pages/ClientsPage/ClientsPage';
import DashboardPage from 'src/pages/DashboardPage/DashboardPage';
import ReceiptsPage from 'src/pages/ReceiptsPage/ReceiptsPage';
import SettingsPage from 'src/pages/SettingsPage/SettingsPage';
import TimeTrackingPage from 'src/pages/TimeTrackingPage/TimeTrackingPage';
import TransactionsPage from 'src/pages/TransactionsPage/TransactionsPage';

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={DashboardPage} name="dashboard" />
      <Route path="/transactions" page={TransactionsPage} name="transactions" />
      <Route path="/receipts" page={ReceiptsPage} name="receipts" />
      <Route path="/time-tracking" page={TimeTrackingPage} name="timeTracking" />
      <Route path="/clients" page={ClientsPage} name="clients" />
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;

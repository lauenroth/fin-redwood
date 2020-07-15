import { Router, Route } from '@redwoodjs/router';
import DashboardPage from 'src/pages/DashboardPage/DashboardPage';
import InvoicesPage from 'src/pages/InvoicesPage/InvoicesPage';
import SettingsPage from 'src/pages/SettingsPage/SettingsPage';
import TimeTrackingPage from 'src/pages/TimeTrackingPage/TimeTrackingPage';
import TransactionsPage from 'src/pages/TransactionsPage/TransactionsPage';

import ClientsPage from 'src/pages/ClientsPage/ClientsPage';

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={DashboardPage} name="dashboard" />
      <Route path="/transactions" page={TransactionsPage} name="transactions" />
      <Route path="/time-tracking" page={TimeTrackingPage} name="timeTracking" />
      <Route path="/clients" page={ClientsPage} name="clients" />
      <Route path="/invoices" page={InvoicesPage} name="invoices" />
      <Route path="/settings" page={SettingsPage} name="settings" />

      <Route path="/clients/new" page={NewClientPage} name="newClient" />
      <Route path="/clients/{id:Int}/edit" page={EditClientPage} name="editClient" />
      <Route path="/clients/{id:Int}" page={ClientPage} name="client" />

      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;

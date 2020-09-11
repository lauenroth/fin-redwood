import { Router, Route } from '@redwoodjs/router';
import DashboardPage from 'src/pages/Dashboard/DashboardPage/DashboardPage';

import ClientsPage from 'src/pages/Clients/ClientsPage/ClientsPage';
import ClientPage from 'src/pages/Clients/ClientPage/ClientPage';
import NewClientPage from 'src/pages/Clients/NewClientPage/NewClientPage';
import EditClientPage from 'src/pages/Clients/EditClientPage/EditClientPage';

import TimeTrackingsPage from 'src/pages/TimeTracking/TimeTrackingPage/TimeTrackingPage';
import NewTimeTrackingPage from 'src/pages/TimeTracking/NewTimeTrackingPage/NewTimeTrackingPage';

import InvoicesPage from 'src/pages/Invoices/InvoicesPage/InvoicesPage';
import InvoicePage from 'src/pages/Invoices/InvoicePage/InvoicePage';
import NewInvoicePage from 'src/pages/Invoices/NewInvoicePage/NewInvoicePage';
import EditInvoicePage from 'src/pages/Invoices/EditInvoicePage/EditInvoicePage';

import TransactionsPage from 'src/pages/Transactions/TransactionsPage/TransactionsPage';
import TransactionPage from 'src/pages/Transactions/TransactionPage/TransactionPage';
import NewTransactionPage from 'src/pages/Transactions/NewTransactionPage/NewTransactionPage';
import EditTransactionPage from 'src/pages/Transactions/EditTransactionPage/EditTransactionPage';
import TransactionImportPage from 'src/pages/Transactions/TransactionImportPage/TransactionImportPage';

import SettingsPage from 'src/pages/SettingsPage/SettingsPage';

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={DashboardPage} name="dashboard" />

      <Route path="/time-tracking/new" page={NewTimeTrackingPage} name="newTimeTracking" />
      <Route path="/time-tracking/{id:Int}/edit" page={EditTimeTrackingPage} name="editTimeTracking" />
      <Route path="/time-tracking/{id:Int}" page={TimeTrackingPage} name="timeTracking" />
      <Route path="/time-tracking" page={TimeTrackingsPage} name="timeTrackings" />

      <Route path="/invoices" page={InvoicesPage} name="invoices" />
      <Route path="/invoices/{id:Int}/edit" page={EditInvoicePage} name="editInvoice" />
      <Route path="/invoices/{id:Int}" page={InvoicePage} name="invoice" />
      <Route path="/invoices/new" page={NewInvoicePage} name="newInvoice" />

      <Route path="/transactions" page={TransactionsPage} name="transactions" />
      <Route path="/transactions/{id:Int}/edit" page={EditTransactionPage} name="editTransaction" />
      <Route path="/transactions/{id:Int}" page={TransactionPage} name="transaction" />
      <Route path="/transactions/new" page={NewTransactionPage} name="newTransaction" />
      <Route path="/transaction-import" page={TransactionImportPage} name="transactionImport" />

      <Route path="/time-tracking" page={TimeTrackingPage} name="timeTracking" />
      <Route path="/time-tracking/new" page={NewTimeTrackingPage} name="newTimeTracking" />

      <Route path="/clients" page={ClientsPage} name="clients" />
      <Route path="/clients/{id:Int}/edit" page={EditClientPage} name="editClient" />
      <Route path="/clients/{id:Int}" page={ClientPage} name="client" />
      <Route path="/clients/new" page={NewClientPage} name="newClient" />

      <Route path="/settings" page={SettingsPage} name="settings" />

      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;

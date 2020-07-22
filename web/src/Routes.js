import { Router, Route } from '@redwoodjs/router';
import DashboardPage from 'src/pages/Dashboard/DashboardPage/DashboardPage';
import InvoicesPage from 'src/pages/Invoices/InvoicesPage/InvoicesPage';
import SettingsPage from 'src/pages/SettingsPage/SettingsPage';
import TimeTrackingPage from 'src/pages/TimeTrackingPage/TimeTrackingPage';
import TransactionsPage from 'src/pages/Transactions/TransactionsPage/TransactionsPage';
import TransactionImportPage from 'src/pages/Transactions/TransactionImportPage/TransactionImportPage';
import ClientsPage from 'src/pages/Clients/ClientsPage/ClientsPage';
import NewInvoicePage from 'src/pages/Invoices/NewInvoice/NewInvoicePage';

import NewTransactionPage from 'src/pages/Transactions/NewTransactionPage/NewTransactionPage';
import EditTransactionPage from 'src/pages/Transactions/EditTransactionPage/EditTransactionPage';
import TransactionPage from 'src/pages/Transactions/TransactionPage/TransactionPage';
import ClientPage from 'src/pages/Clients/ClientPage/ClientPage';
import NewClientPage from 'src/pages/Clients/NewClientPage/NewClientPage';
import EditClientPage from 'src/pages/Clients/EditClientPage/EditClientPage';

const Routes = () => {
  return (
    <Router>
      <Route path="/transaction-import" page={TransactionImportPage} name="transactionImport" />
      <Route path="/transactions/new" page={NewTransactionPage} name="newTransaction" />
      <Route path="/transactions/{id:Int}/edit" page={EditTransactionPage} name="editTransaction" />
      <Route path="/transactions/{id:Int}" page={TransactionPage} name="transaction" />
      <Route path="/" page={DashboardPage} name="dashboard" />
      <Route path="/transactions" page={TransactionsPage} name="transactions" />
      <Route path="/time-tracking" page={TimeTrackingPage} name="timeTracking" />
      <Route path="/clients" page={ClientsPage} name="clients" />
      <Route path="/invoices" page={InvoicesPage} name="invoices" />
      <Route path="/invoices/new" page={NewInvoicePage} name="newInvoice" />
      <Route path="/settings" page={SettingsPage} name="settings" />

      <Route path="/clients/new" page={NewClientPage} name="newClient" />
      <Route path="/clients/{id:Int}/edit" page={EditClientPage} name="editClient" />
      <Route path="/clients/{id:Int}" page={ClientPage} name="client" />

      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;

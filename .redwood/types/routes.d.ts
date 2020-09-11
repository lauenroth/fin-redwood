
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                dashboard: () => "/"
newTimeTracking: () => "/time-tracking/new"
editTimeTracking: () => "/time-tracking/{id:Int}/edit"
timeTracking: () => "/time-tracking/{id:Int}"
timeTrackings: () => "/time-tracking"
invoices: () => "/invoices"
editInvoice: () => "/invoices/{id:Int}/edit"
invoice: () => "/invoices/{id:Int}"
newInvoice: () => "/invoices/new"
transactions: () => "/transactions"
editTransaction: () => "/transactions/{id:Int}/edit"
transaction: () => "/transactions/{id:Int}"
newTransaction: () => "/transactions/new"
transactionImport: () => "/transaction-import"
timeTracking: () => "/time-tracking"
newTimeTracking: () => "/time-tracking/new"
clients: () => "/clients"
editClient: () => "/clients/{id:Int}/edit"
client: () => "/clients/{id:Int}"
newClient: () => "/clients/new"
settings: () => "/settings"
              }
            }

            import type ClientsClientPageType from '/Users/jorg/code/finny/web/src/pages/Clients/ClientPage/ClientPage'
import type ClientsEditClientPageType from '/Users/jorg/code/finny/web/src/pages/Clients/EditClientPage/EditClientPage'
import type ClientsNewClientPageType from '/Users/jorg/code/finny/web/src/pages/Clients/NewClientPage/NewClientPage'
import type EditTimeTrackingPageType from '/Users/jorg/code/finny/web/src/pages/EditTimeTrackingPage/EditTimeTrackingPage'
import type FatalErrorPageType from '/Users/jorg/code/finny/web/src/pages/FatalErrorPage/FatalErrorPage'
import type InvoicesEditInvoicePageType from '/Users/jorg/code/finny/web/src/pages/Invoices/EditInvoicePage/EditInvoicePage'
import type InvoicesInvoicePageType from '/Users/jorg/code/finny/web/src/pages/Invoices/InvoicePage/InvoicePage'
import type NewTimeTrackingPageType from '/Users/jorg/code/finny/web/src/pages/NewTimeTrackingPage/NewTimeTrackingPage'
import type NotFoundPageType from '/Users/jorg/code/finny/web/src/pages/NotFoundPage/NotFoundPage'
import type TimeTrackingPageType from '/Users/jorg/code/finny/web/src/pages/TimeTrackingPage/TimeTrackingPage'
import type TimeTrackingsPageType from '/Users/jorg/code/finny/web/src/pages/TimeTrackingsPage/TimeTrackingsPage'
import type TransactionsEditTransactionPageType from '/Users/jorg/code/finny/web/src/pages/Transactions/EditTransactionPage/EditTransactionPage'
import type TransactionsNewTransactionPageType from '/Users/jorg/code/finny/web/src/pages/Transactions/NewTransactionPage/NewTransactionPage'
import type TransactionsTransactionPageType from '/Users/jorg/code/finny/web/src/pages/Transactions/TransactionPage/TransactionPage'
            declare global {
              const ClientsClientPage: typeof ClientsClientPageType
const ClientsEditClientPage: typeof ClientsEditClientPageType
const ClientsNewClientPage: typeof ClientsNewClientPageType
const EditTimeTrackingPage: typeof EditTimeTrackingPageType
const FatalErrorPage: typeof FatalErrorPageType
const InvoicesEditInvoicePage: typeof InvoicesEditInvoicePageType
const InvoicesInvoicePage: typeof InvoicesInvoicePageType
const NewTimeTrackingPage: typeof NewTimeTrackingPageType
const NotFoundPage: typeof NotFoundPageType
const TimeTrackingPage: typeof TimeTrackingPageType
const TimeTrackingsPage: typeof TimeTrackingsPageType
const TransactionsEditTransactionPage: typeof TransactionsEditTransactionPageType
const TransactionsNewTransactionPage: typeof TransactionsNewTransactionPageType
const TransactionsTransactionPage: typeof TransactionsTransactionPageType
            }
          
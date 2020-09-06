
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                transactionImport: () => "/transaction-import"
newTransaction: () => "/transactions/new"
editTransaction: () => "/transactions/{id:Int}/edit"
transaction: () => "/transactions/{id:Int}"
dashboard: () => "/"
transactions: () => "/transactions"
timeTracking: () => "/time-tracking"
clients: () => "/clients"
invoices: () => "/invoices"
newInvoice: () => "/invoices/new"
settings: () => "/settings"
newClient: () => "/clients/new"
editClient: () => "/clients/{id:Int}/edit"
client: () => "/clients/{id:Int}"
              }
            }

            import type ClientsClientPageType from '/Users/jorg/code/finny/web/src/pages/Clients/ClientPage/ClientPage'
import type ClientsEditClientPageType from '/Users/jorg/code/finny/web/src/pages/Clients/EditClientPage/EditClientPage'
import type ClientsNewClientPageType from '/Users/jorg/code/finny/web/src/pages/Clients/NewClientPage/NewClientPage'
import type FatalErrorPageType from '/Users/jorg/code/finny/web/src/pages/FatalErrorPage/FatalErrorPage'
import type NotFoundPageType from '/Users/jorg/code/finny/web/src/pages/NotFoundPage/NotFoundPage'
import type TransactionsEditTransactionPageType from '/Users/jorg/code/finny/web/src/pages/Transactions/EditTransactionPage/EditTransactionPage'
import type TransactionsNewTransactionPageType from '/Users/jorg/code/finny/web/src/pages/Transactions/NewTransactionPage/NewTransactionPage'
import type TransactionsTransactionPageType from '/Users/jorg/code/finny/web/src/pages/Transactions/TransactionPage/TransactionPage'
            declare global {
              const ClientsClientPage: typeof ClientsClientPageType
const ClientsEditClientPage: typeof ClientsEditClientPageType
const ClientsNewClientPage: typeof ClientsNewClientPageType
const FatalErrorPage: typeof FatalErrorPageType
const NotFoundPage: typeof NotFoundPageType
const TransactionsEditTransactionPage: typeof TransactionsEditTransactionPageType
const TransactionsNewTransactionPage: typeof TransactionsNewTransactionPageType
const TransactionsTransactionPage: typeof TransactionsTransactionPageType
            }
          
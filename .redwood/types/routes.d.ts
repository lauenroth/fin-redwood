import '@redwoodjs/router'

type ParamType<constraint> = constraint extends "Int" ? number : constraint extends "Boolean" ? boolean : constraint extends "Float" ? number : string;
type RouteParams<Route> = Route extends `${string}/{${infer Param}:${infer Constraint}}/${infer Rest}` ? { [Entry in Param]: ParamType<Constraint> } & RouteParams<`/${Rest}`> : Route extends `${string}/{${infer Param}:${infer Constraint}}` ? { [Entry in Param]: ParamType<Constraint> } : Route extends `${string}/{${infer Param}}/${infer Rest}` ? { [Entry in Param]: string } & RouteParams<`/${Rest}`> : {}
type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    dashboard: (params?: RouteParams<"/"> & QueryParams) => "/"
    newTimeTracking: (params?: RouteParams<"/time-tracking/new"> & QueryParams) => "/time-tracking/new"
    editTimeTracking: (params?: RouteParams<"/time-tracking/{id:Int}/edit"> & QueryParams) => "/time-tracking/{id:Int}/edit"
    timeTracking: (params?: RouteParams<"/time-tracking/{id:Int}"> & QueryParams) => "/time-tracking/{id:Int}"
    timeTrackings: (params?: RouteParams<"/time-tracking"> & QueryParams) => "/time-tracking"
    invoices: (params?: RouteParams<"/invoices"> & QueryParams) => "/invoices"
    editInvoice: (params?: RouteParams<"/invoices/{id:Int}/edit"> & QueryParams) => "/invoices/{id:Int}/edit"
    invoice: (params?: RouteParams<"/invoices/{id:Int}"> & QueryParams) => "/invoices/{id:Int}"
    newInvoice: (params?: RouteParams<"/invoices/new"> & QueryParams) => "/invoices/new"
    transactions: (params?: RouteParams<"/transactions"> & QueryParams) => "/transactions"
    editTransaction: (params?: RouteParams<"/transactions/{id:Int}/edit"> & QueryParams) => "/transactions/{id:Int}/edit"
    transaction: (params?: RouteParams<"/transactions/{id:Int}"> & QueryParams) => "/transactions/{id:Int}"
    newTransaction: (params?: RouteParams<"/transactions/new"> & QueryParams) => "/transactions/new"
    transactionImport: (params?: RouteParams<"/transaction-import"> & QueryParams) => "/transaction-import"
    timeTracking: (params?: RouteParams<"/time-tracking"> & QueryParams) => "/time-tracking"
    newTimeTracking: (params?: RouteParams<"/time-tracking/new"> & QueryParams) => "/time-tracking/new"
    clients: (params?: RouteParams<"/clients"> & QueryParams) => "/clients"
    editClient: (params?: RouteParams<"/clients/{id:Int}/edit"> & QueryParams) => "/clients/{id:Int}/edit"
    client: (params?: RouteParams<"/clients/{id:Int}"> & QueryParams) => "/clients/{id:Int}"
    newClient: (params?: RouteParams<"/clients/new"> & QueryParams) => "/clients/new"
    settings: (params?: RouteParams<"/settings"> & QueryParams) => "/settings"
  }
}

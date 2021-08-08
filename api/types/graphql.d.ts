import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['Int'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CreateClientInput = {
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type CreateInvoiceInput = {
  number: Scalars['String'];
  date: Scalars['DateTime'];
  clientId: Scalars['Int'];
  items?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  total: Scalars['Float'];
};

export type CreateTimeTrackingInput = {
  clientId: Scalars['Int'];
  date: Scalars['DateTime'];
  hours: Scalars['Float'];
};

export type CreateTransactionInput = {
  date: Scalars['DateTime'];
  payee: Scalars['String'];
  amount: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  foreignAmount?: Maybe<Scalars['Float']>;
  foreignCurrency?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  import?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};



export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['Int'];
  number: Scalars['String'];
  date: Scalars['DateTime'];
  client: Client;
  clientId: Scalars['Int'];
  items?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  total: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createClient: Client;
  createInvoice: Invoice;
  createTimeTracking: TimeTracking;
  createTransaction: Transaction;
  deleteClient: Client;
  deleteInvoice: Invoice;
  deleteTimeTracking: TimeTracking;
  deleteTransaction: Transaction;
  updateClient: Client;
  updateInvoice: Invoice;
  updateTimeTracking: TimeTracking;
  updateTransaction: Transaction;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreateTimeTrackingArgs = {
  input: CreateTimeTrackingInput;
};


export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


export type MutationDeleteClientArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteInvoiceArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTimeTrackingArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTransactionArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateClientArgs = {
  id: Scalars['Int'];
  input: UpdateClientInput;
};


export type MutationUpdateInvoiceArgs = {
  id: Scalars['Int'];
  input: UpdateInvoiceInput;
};


export type MutationUpdateTimeTrackingArgs = {
  id: Scalars['Int'];
  input: UpdateTimeTrackingInput;
};


export type MutationUpdateTransactionArgs = {
  id: Scalars['Int'];
  input: UpdateTransactionInput;
};

export type Query = {
  __typename?: 'Query';
  clientDetails: Client;
  clients: Array<Client>;
  invoice?: Maybe<Invoice>;
  invoices: Array<Invoice>;
  redwood?: Maybe<Redwood>;
  timeTracking?: Maybe<TimeTracking>;
  timeTrackings: Array<TimeTracking>;
  timeTrackingsWeek: Array<TimeTracking>;
  transaction: Transaction;
  transactions: Array<Transaction>;
};


export type QueryClientDetailsArgs = {
  id: Scalars['Int'];
};


export type QueryInvoiceArgs = {
  id: Scalars['Int'];
};


export type QueryTimeTrackingArgs = {
  id: Scalars['Int'];
};


export type QueryTransactionArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type TimeTracking = {
  __typename?: 'TimeTracking';
  id: Scalars['Int'];
  client: Client;
  clientId: Scalars['Int'];
  date: Scalars['DateTime'];
  hours: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['Int'];
  date: Scalars['DateTime'];
  payee: Scalars['String'];
  amount: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  foreignAmount?: Maybe<Scalars['Float']>;
  foreignCurrency?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  import?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateClientInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateInvoiceInput = {
  number?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  clientId?: Maybe<Scalars['Int']>;
  items?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
};

export type UpdateTimeTrackingInput = {
  clientId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  hours?: Maybe<Scalars['Float']>;
};

export type UpdateTransactionInput = {
  date?: Maybe<Scalars['DateTime']>;
  payee?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  foreignAmount?: Maybe<Scalars['Float']>;
  foreignCurrency?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  import?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Client: ResolverTypeWrapper<Client>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateClientInput: CreateClientInput;
  CreateInvoiceInput: CreateInvoiceInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  CreateTimeTrackingInput: CreateTimeTrackingInput;
  CreateTransactionInput: CreateTransactionInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Invoice: ResolverTypeWrapper<Invoice>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  TimeTracking: ResolverTypeWrapper<TimeTracking>;
  Transaction: ResolverTypeWrapper<Transaction>;
  UpdateClientInput: UpdateClientInput;
  UpdateInvoiceInput: UpdateInvoiceInput;
  UpdateTimeTrackingInput: UpdateTimeTrackingInput;
  UpdateTransactionInput: UpdateTransactionInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Client: Client;
  Int: Scalars['Int'];
  String: Scalars['String'];
  CreateClientInput: CreateClientInput;
  CreateInvoiceInput: CreateInvoiceInput;
  Float: Scalars['Float'];
  CreateTimeTrackingInput: CreateTimeTrackingInput;
  CreateTransactionInput: CreateTransactionInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Invoice: Invoice;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Query: {};
  Redwood: Redwood;
  Time: Scalars['Time'];
  TimeTracking: TimeTracking;
  Transaction: Transaction;
  UpdateClientInput: UpdateClientInput;
  UpdateInvoiceInput: UpdateInvoiceInput;
  UpdateTimeTrackingInput: UpdateTimeTrackingInput;
  UpdateTransactionInput: UpdateTransactionInput;
  Boolean: Scalars['Boolean'];
};

export type ClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoices?: Resolver<Maybe<Array<Maybe<ResolversTypes['Invoice']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type InvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  client?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  clientId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createClient?: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  createInvoice?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationCreateInvoiceArgs, 'input'>>;
  createTimeTracking?: Resolver<ResolversTypes['TimeTracking'], ParentType, ContextType, RequireFields<MutationCreateTimeTrackingArgs, 'input'>>;
  createTransaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType, RequireFields<MutationCreateTransactionArgs, 'input'>>;
  deleteClient?: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationDeleteClientArgs, 'id'>>;
  deleteInvoice?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationDeleteInvoiceArgs, 'id'>>;
  deleteTimeTracking?: Resolver<ResolversTypes['TimeTracking'], ParentType, ContextType, RequireFields<MutationDeleteTimeTrackingArgs, 'id'>>;
  deleteTransaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType, RequireFields<MutationDeleteTransactionArgs, 'id'>>;
  updateClient?: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<MutationUpdateClientArgs, 'id' | 'input'>>;
  updateInvoice?: Resolver<ResolversTypes['Invoice'], ParentType, ContextType, RequireFields<MutationUpdateInvoiceArgs, 'id' | 'input'>>;
  updateTimeTracking?: Resolver<ResolversTypes['TimeTracking'], ParentType, ContextType, RequireFields<MutationUpdateTimeTrackingArgs, 'id' | 'input'>>;
  updateTransaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType, RequireFields<MutationUpdateTransactionArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  clientDetails?: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<QueryClientDetailsArgs, 'id'>>;
  clients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType>;
  invoice?: Resolver<Maybe<ResolversTypes['Invoice']>, ParentType, ContextType, RequireFields<QueryInvoiceArgs, 'id'>>;
  invoices?: Resolver<Array<ResolversTypes['Invoice']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  timeTracking?: Resolver<Maybe<ResolversTypes['TimeTracking']>, ParentType, ContextType, RequireFields<QueryTimeTrackingArgs, 'id'>>;
  timeTrackings?: Resolver<Array<ResolversTypes['TimeTracking']>, ParentType, ContextType>;
  timeTrackingsWeek?: Resolver<Array<ResolversTypes['TimeTracking']>, ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType, RequireFields<QueryTransactionArgs, 'id'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TimeTrackingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeTracking'] = ResolversParentTypes['TimeTracking']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  client?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  clientId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  hours?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  payee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreignAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  import?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Client?: ClientResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Invoice?: InvoiceResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeTracking?: TimeTrackingResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

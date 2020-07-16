import gql from 'graphql-tag';

export const schema = gql`
  type Transaction {
    id: Int!
    date: DateTime!
    payee: String!
    amount: Float!
    type: String
    foreignAmount: Float
    foreignCurrency: String
    category: String
    vat: String
    reference: String
    description: String
    import: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    transactions: [Transaction!]!
    transaction(id: Int!): Transaction!
  }

  input CreateTransactionInput {
    date: DateTime!
    payee: String!
    amount: Float!
    type: String
    foreignAmount: Float
    foreignCurrency: String
    category: String
    vat: String
    reference: String
    description: String
    import: String
    updatedAt: DateTime
  }

  input UpdateTransactionInput {
    date: DateTime
    payee: String
    amount: Float
    type: String
    foreignAmount: Float
    foreignCurrency: String
    category: String
    vat: String
    reference: String
    description: String
    import: String
    updatedAt: DateTime
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction!
    updateTransaction(id: Int!, input: UpdateTransactionInput!): Transaction!
    deleteTransaction(id: Int!): Transaction!
  }
`;

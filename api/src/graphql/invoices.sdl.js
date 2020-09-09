export const schema = gql`
  type Invoice {
    id: Int!
    number: String!
    date: DateTime!
    client: Client!
    clientId: Int!
    items: JSON
    status: String
    total: Float!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    invoices: [Invoice!]!
    invoice(id: Int!): Invoice
  }

  input CreateInvoiceInput {
    number: String!
    date: DateTime!
    clientId: Int!
    items: JSON
    status: String
    total: Float!
  }

  input UpdateInvoiceInput {
    number: String
    date: DateTime
    clientId: Int
    items: JSON
    status: String
    total: Float
  }

  type Mutation {
    createInvoice(input: CreateInvoiceInput!): Invoice!
    updateInvoice(id: Int!, input: UpdateInvoiceInput!): Invoice!
    deleteInvoice(id: Int!): Invoice!
  }
`;

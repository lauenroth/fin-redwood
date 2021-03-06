import gql from 'graphql-tag';

export const schema = gql`
  type Client {
    id: Int!
    name: String!
    address: String
    email: String
    phone: String
    website: String
    vat: String
    logo: String
    notes: String
    invoices: [Invoice]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    clients: [Client!]!
    clientDetails(id: Int!): Client!
  }

  input CreateClientInput {
    name: String!
    address: String
    email: String
    phone: String
    website: String
    vat: String
    logo: String
    notes: String
  }

  input UpdateClientInput {
    name: String
    address: String
    email: String
    phone: String
    website: String
    vat: String
    notes: String
    logo: String
    updatedAt: DateTime
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client!
    updateClient(id: Int!, input: UpdateClientInput!): Client!
    deleteClient(id: Int!): Client!
  }
`;

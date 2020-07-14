import gql from 'graphql-tag';

export const schema = gql`
  type Client {
    id: Int!
    name: String!
    address: String
    email: String
    phone: String
    website: String
    vat: Int
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    clients: [Client!]!
    client(id: Int!): Client!
  }

  input CreateClientInput {
    name: String!
    address: String
    email: String
    phone: String
    website: String
    vat: Int
    notes: String
  }

  input UpdateClientInput {
    name: String
    address: String
    email: String
    phone: String
    website: String
    vat: Int
    notes: String
    updatedAt: DateTime
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client!
    updateClient(id: Int!, input: UpdateClientInput!): Client!
    deleteClient(id: Int!): Client!
  }
`;

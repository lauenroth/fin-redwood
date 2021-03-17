export const schema = gql`
  type TimeTracking {
    id: Int!
    client: Client!
    clientId: Int!
    date: DateTime!
    hours: Float!
    createdAt: DateTime
  }

  type Query {
    timeTrackings: [TimeTracking!]!
    timeTrackingsWeek: [TimeTracking!]!
    timeTracking(id: Int!): TimeTracking
  }

  input CreateTimeTrackingInput {
    clientId: Int!
    date: DateTime!
    hours: Float!
  }

  input UpdateTimeTrackingInput {
    clientId: Int
    date: DateTime
    hours: Float
  }

  type Mutation {
    createTimeTracking(input: CreateTimeTrackingInput!): TimeTracking!
    updateTimeTracking(id: Int!, input: UpdateTimeTrackingInput!): TimeTracking!
    deleteTimeTracking(id: Int!): TimeTracking!
  }
`;

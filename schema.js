const { buildSchema } = require('graphql')

const schema = buildSchema(`
scalar Date
scalar DateTime

input PaymentCard {
  cardNum: String!
  expirationDate: String!
  cvv: String!
}

type Ticket {
  id: String
  price: Int
  from: String
  to: String
  date: DateTime
  tripDuration: Int
}

type MyTicket {
  id: String
  price: Int
  from: String
  to: String
  date: DateTime
  tripDuration: Int
  boughtTime: DateTime
  paid: Boolean
}

type Query {
  getTickets(
    from: String!
    to: String!
    maxPrice: Int
    dateFrom: Date
    dateTo: Date
  ): [Ticket!]!
  getOneTicket(id: String!): Ticket!
  getMyTickets(from: String!, to: String!, limit: Int = 20): [MyTicket!]!
}

type Mutation {
  orderTickets(ticketsId: [String!]!): [Ticket!]!
  payForTickets(ticketsId: [String!]!, card: PaymentCard!): [MyTicket!]!
  cancelTickets(ticketsId: [String!]!): String!
}
`)

module.exports = schema

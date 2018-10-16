const typeDef = `
type DBString{
  _id: String!
  name: String!
}
type Query {
  allStorage: [DBString!]!
  oneDBString: DBString!
}
type Mutation {
  createDBString(name: String!): DBString!
  removeDBString(name: String!): DBString!
}
`;

module.exports = typeDef;
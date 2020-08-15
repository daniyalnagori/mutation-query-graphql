const { gql } = require('apollo-server')

const typeDef = gql`
type messageType {
    message: String
    id: ID 
}
input messageInput {
    message: String
}

type Mutation {
    createMessage(input: messageInput): messageType
}
type Query {
    getMessage: String
    getName: String
    getAllMessags: [messageType]
}
`
module.exports = typeDef
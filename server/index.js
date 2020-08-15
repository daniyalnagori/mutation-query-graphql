let { ApolloServer } = require('apollo-server')
let typeDefs = require('./Schema/schema')
let resolvers = require('./Resolvers')

let apolloServer = new ApolloServer({typeDefs,resolvers})

apolloServer.listen().then(({url})=>{
    console.log(`server is running on port ${url}`)
})

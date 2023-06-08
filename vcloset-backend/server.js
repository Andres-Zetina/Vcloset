const express = require('express');
const {ApolloServer} = require('apollo-server-express');


//typeDefs define the schema
const typeDefs = gql `
    type Query {
        hello: String
    }
`
//resolvers define the technique for fetching the types defined in the schema
const resolvers = {
    Query: {
        hello : () => 'Hello World!'
    },
}

//Createing appolo server
const server = new ApolloServer ({typeDefs, resolvers});

const app = express();
server.applyMiddleware({app}); 

//starting the server
app.listen({port: 4000}, () => 
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
);
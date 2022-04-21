const {ApolloServer, gql } = require('apollo-server');

//gql is type defination
//with server we need to sepcify type defination and resolvers
//schema - the way the data going to looks
//resolvers are actuall function return the datat=
//query is what to fetch
const typeDefs = gql `
    type Query {
        hello: String
    }

`

const resolvers = {

    Query:{
        hello: ()=>{
            return "World"
        }
    }
}


const server = new ApolloServer({typeDefs,resolvers})




server.listen().then(({url})=>{
    console.log('server is running '+ url)
})
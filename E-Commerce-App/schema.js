//gql is type defination
//with server we need to sepcify type defination and resolvers
//schema - the way the data going to looks
//resolvers are actuall function return the datat=
//query is what to fetch

//property hello return a string
//! at end only return speific type not even null

//for single product need to pass id


const { gql } = require('apollo-server');
exports.typeDefs = gql `
    type Query {
        
        hello: String
        Products: [Product!]! 
        Product(id:ID!) : Product
        Categories: [Category!]!
        category(id:ID!): Category
    }
    type Mutation {

        addCategory(input: AddCategoryInput!): Category!
        
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale:Boolean!
        category : Category

    }
    type Category {
        id: ID!
        name: String
        products:[Product!]!
    }

    input AddCategoryInput {
        name: String!
    }

`;
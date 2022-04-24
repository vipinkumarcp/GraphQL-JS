const {ApolloServer, gql } = require('apollo-server');
const {products,categories} = require('./data')

//gql is type defination
//with server we need to sepcify type defination and resolvers
//schema - the way the data going to looks
//resolvers are actuall function return the datat=
//query is what to fetch

//property hello return a string
//! at end only return speific type not even null

//for single product need to pass id

const typeDefs = gql `
    type Query {
        
        hello: String
        Products: [Product!]! 
        Product(id:ID!) : Product
        Categories: [Category!]!
        category(id:ID!): Category
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale:Boolean!

    }
    type Category {
        id: ID!
        name: String
        products:[Product!]!
    }

`;

const resolvers = {

    Query:{
        hello: (parent,args,context)=>{
            return ["hello","car","jeep"]
        },
        Products : (parent,args,context)=>{
            return products;
        },
        Product : (parent,args,context)=>{

            const productId = args.id;
            return products.find(product => product.id === productId)
          
        },
        Categories:(parent,args,context)=>{
            return categories
        },
        category:(parent,args,context)=>{
            const {id} = args;
            return categories.find((category)=> category.id === id )
        }


    },
    Catergory:{
        products:(parent,args,context)
    }
}


const server = new ApolloServer({typeDefs,resolvers})




server.listen().then(({url})=>{
    console.log('server is running '+ url)
})
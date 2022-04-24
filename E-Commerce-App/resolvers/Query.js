const {products,categories} = require('../db')

 exports.Query={
    hello: (parent,args,context)=>{
        return ["hello","car","jeep"]
    },
    Products : (parent,args,{products})=>{
        return products;
    },
    Product : (parent,{id},{products})=>{
        return products.find(product => product.id === id)
      
    },
    Categories:(parent,args,{categories})=>{
        return categories
    },
    category:(parent,{id},{categories})=>{
        return categories.find((category)=> category.id === id )
    }
}
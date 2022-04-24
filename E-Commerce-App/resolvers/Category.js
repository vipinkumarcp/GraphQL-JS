

//one to many
 exports.Category = {
    products:({id:categoryId},args,{products})=>{
 
        return products.filter((product)=> product.categoryId === categoryId)

    }
}
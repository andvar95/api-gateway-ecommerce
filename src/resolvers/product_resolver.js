const productResolver = {
    Query:{
        getProduct:(_,{id},{dataSources,userId})=>{
            return dataSources.productAPI.getProduct(id,userId);
        },
        getProducts:(_,{},{dataSources})=>{
            return dataSources.productAPI.getProducts();
        },
        recommendations:(_,{},{dataSources,userId})=>{
            return dataSources.productAPI.recommendations(userId);
        }

    },
    Mutation:{
        createProduct:(_,{product},{dataSources,userId,admin})=>{
            return dataSources.productAPI.createProduct(product);
        },
        updateProduct:(_,{id,product},{dataSources,userId,admin})=>{
            return dataSources.productAPI.updateProduct(id,product);
        },
        deleteProduct:(_,{id},{dataSources,userId,admin})=>{
            return dataSources.productAPI.deleteProduct(id);
        },
        checkStock:(_,{products},{dataSources,userId})=>{
            return dataSources.productAPI.checkStock(products);
        }

    }


};

module.exports = productResolver;
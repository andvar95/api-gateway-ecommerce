const {RESTDataSource} = require('apollo-datasource-rest');
const {product_api_url} = require('../../server');

class ProductAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = product_api_url;
    }

    async getProduct(id,userId=2){
        return await this.get(`/products/${id}${userId?'?user='+userId:''}/`)
    }

    async getProducts(){
        return await this.get(`/products/`)
    }

    async createProduct(product){
        return await this.post(`/products/`,product)
    }

    async updateProduct(id,product){
        return await this.put(`/products/${id}`,product)
    }
    
    async deleteProduct(id){
        return await this.delete(`/products/${id}`)
    }

    async recommendations(userId=2){
        return await this.get(`/products/recommendations${userId?'?user='+userId:''}`)
    }

    async checkStock(products){
        return await this.post(`/products/checkstock/`,products)
    }



   

}
module.exports = ProductAPI;
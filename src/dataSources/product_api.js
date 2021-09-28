const {RESTDataSource} = require('apollo-datasource-rest');
const {product_api_url} = require('../server');

class ProductAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = product_api_url;
    }

    async getProduct(id){
        return await this.get(`/products/${id}`)
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

    async recommendation()

}
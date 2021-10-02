const { gql } = require("apollo-server");

const productsTypeDefs = gql `
    input InputProduct{
        name: String!,
        description: String,
        price: Int,
        category: String,
        discount: Float,
        quantity: Int,  
        in_stock: Boolean
      }

      type OutputProduct{
        id:Int,
        name: String!,
        description: String,
        price: Int,
        category: String,
        discount: Float,
        quantity: Int,  
        in_stock: Boolean
      }

      
      
      type statusResponse{
        status:[String]
      }

      input UpdateProduct{
        id:Int,
        name: String!,
        description: String,
        price: Int,
        category: String,
        discount: Float,
        quantity: Int,  
        in_stock: Boolean
      }



      type Query{
          getProduct(id:Int!):OutputProduct
          getProducts:[OutputProduct]
          recommendations:[OutputProduct]
      }

    
      type Mutation{
          createProduct(product:InputProduct!):OutputProduct
          deleteProduct(id:Int!):OutputProduct
          updateProduct(id:Int!,product:UpdateProduct):OutputProduct
          checkStock(products:[UpdateProduct]):statusResponse
      }
    
`;

module.exports = productsTypeDefs;
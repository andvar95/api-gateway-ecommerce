const { gql } = require("apollo-server");

const productsTypeDefs = qgl`
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
      }

    
      type Mutation{
          createProduct(product:InputProduct!):OutputProduct
          deleteProduct(id:Int!):OutputProduct
          updateProduct(id:Int!,product:UpdateProduct):OutputProduct
      }
    
`;

module.exports = productsTypeDefs;
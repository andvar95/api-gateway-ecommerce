const {ApolloServer} = require("apollo-server");
const typeDefs = require("./src/typeDefs");
const resolvers = require("./src/resolvers");
const ProductAPI  = require("./src/dataSources/product_api");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources:()=>({
        productAPI: new ProductAPI()
    }),
    introspection:true,
    playground:true
})

server.listen(process.env.PORT || 4000)
.then(({url})=>console.log(`🚀  Server ready at ${url}`))
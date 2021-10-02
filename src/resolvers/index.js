const lodash = require("lodash");
const productResolver = require("./product_resolver");


const resolvers = lodash.merge(productResolver);

module.exports = resolvers;
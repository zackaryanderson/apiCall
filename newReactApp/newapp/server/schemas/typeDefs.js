//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`

    type RecipeData {
        _id: ID
        apiID: Int
        title: String
        createdAt: String
    }

    type Query {
        recipes(apiID: Int): [RecipeData]
    }

`;

//export the typeDefs
module.exports = typeDefs;
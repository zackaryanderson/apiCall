//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`

    type RecipeData {
        _id: ID
        apiID: String!
        title: String!
        createdAt: String
    }

    type Query {
        recipes: [RecipeData]
        getSingleRecipe(_id: ID): RecipeData
    }

    type Mutation {
        addRecipe(apiID: String!, title: String!): RecipeData
        deleteRecipes(val: String): RecipeData
    }

`;

//export the typeDefs
module.exports = typeDefs;
const { RecipeData } = require('../Models');

const resolvers = {
    Query: {

        recipes: async (parent, {apiID}) => {

            const params = apiID ? { apiID } : {};
            return RecipeData.find(params).sort({ createdAt: -1});
        }

    }
};

module.exports = resolvers;
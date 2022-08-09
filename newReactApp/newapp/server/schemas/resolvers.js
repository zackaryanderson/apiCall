const { RecipeData } = require('../Models');

const resolvers = {
    Query: {

        recipes: async (parent, {apiID}) => {

            //const params = apiID ? { apiID } : {};
            return RecipeData.find().sort({ createdAt: -1});

        },
        getSingleRecipe: async (parent, {_id}) => {

            return await RecipeData.findOne({_id: _id});
        },
        
    },
    Mutation: {

        addRecipe: async (parent, args) => {

            const recipe = await RecipeData.create(args);

            return recipe;

        },
        deleteRecipes: async () => {
            await RecipeData.deleteMany()
            return console.log("done");
        }

    }
};

module.exports = resolvers;
const { Schema, model } = require('mongoose');

const recipeDataSchema = new Schema({

    recipeId: {
        type: String
    },
    recipeTitle: {
        type: String
    },
    searchDate: {
        type: Date,
        detault: Date.now
    }
});

//create recipe data model using schema
const recipeData = model('Recipe Data', recipeDataSchema);

//export recipe model
module.exports = recipeData;
        
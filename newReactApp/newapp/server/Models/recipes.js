const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const recipeDataSchema = new Schema({

    apiID: {
        type: String
    },
    title: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    toJSON: {
        getters: true
    }
});

//create recipe data model using schema
const recipeData = mongoose.model('RecipeData', recipeDataSchema);

//export recipe model
module.exports = recipeData;
        
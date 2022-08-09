import React, { useEffect }  from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_RECIPE } from '../utils/actions';


function RecipePage() {

    //get recipeID from the URL
    let recipeID = window.location.href.split('/').slice(-1).toString();
    let recipeInfo = {};

    const [state, dispatch] = useStoreContext();
    const { currentRecipe } = state;

    //set up API call
    let apiKey = "b0c7f65173eb4810a62bd72e96c8563f";
    let call = "https://api.spoonacular.com/recipes/"+ recipeID + "/information?includeNutrition=false&apiKey=" + apiKey;

    async function GetRecipeInfo (call) {
        
        let response = await fetch (call);
        recipeInfo = await response.json();
        console.log(recipeInfo);

        dispatch({
            type: UPDATE_CURRENT_RECIPE,
            currentRecipe: recipeInfo
        });

    }

    //update this to only do the function call if the recipeID from the window does not match the apiID currently in the 'currentRecipe' in state
    if (state.currentRecipe.id != recipeID) {
        window.onload = function () {
            GetRecipeInfo(call);
        };
    }


    //change the return to instead check if values exist inside. instead of showing "loading" at the top since we dont have a loading variable.
    return(

        <div>
            {!currentRecipe.title ? 

                (<h2>Loading...</h2>)
                :
                (
                    <div>
                        <h2>{currentRecipe.title} (Time to Cook: {currentRecipe.readyInMinutes})</h2>
                        <img src={currentRecipe.image} alt = "Recipe Image" height = {500} width = {1000} />
                        <div  >
                            <h3>Ingredients:</h3>
                            {currentRecipe.extendedIngredients.map( ingredient => {
                                return (
                                    <h4>
                                        {ingredient.name}
                                    </h4>
                                )
                            })}
                            <h3>Recipe:</h3>
                            <h4>{currentRecipe.instructions}</h4>
                        </div>
                    </div>
                )
            }
        </div>

    );


}


export default RecipePage;
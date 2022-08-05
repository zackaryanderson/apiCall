import React from 'react';
import { Redirect } from 'react-router-dom';


//display all the information for a specific clicked recipe
//see if any information was clicked to bring you over here and display that recipes information or display the recipe information for the recipe saved in the state. 


function RecipePage() {

    //get recipeID from the URL
    let recipeID = window.location.href.split('/').slice(-1).toString();

    //set up API call
    let apiKey = "b0c7f65173eb4810a62bd72e96c8563f";
    let call = "https://api.spoonacular.com/recipes/"+ recipeID + "/information?includeNutrition=false&apiKey=" + apiKey;
    let recipeInfo = [];

    async function getRecipeInfo (call) {
        let response = await fetch (call);
        recipeInfo = await response.json();
        console.log(recipeInfo);
    }

    window.onload = function () {
        getRecipeInfo(call);
    };

    return(

        <div>
            {!recipeInfo ? 

                (<h2>Loading...</h2>)
                :
                (
                    <h2>{recipeInfo.title}</h2>
                )
            }
        </div>

    );


}


export default RecipePage;
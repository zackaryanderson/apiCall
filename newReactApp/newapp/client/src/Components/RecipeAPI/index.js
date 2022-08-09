import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RECIPE } from '../../utils/mutations';
import { Redirect } from 'react-router-dom';

function RecipeCall() {

    let apiKey = "b0c7f65173eb4810a62bd72e96c8563f";
    let call = "https://api.spoonacular.com/recipes/random?number=5&apiKey=" + apiKey;
    let data = [];

    async function getNewRecipes (call){

        let response = await fetch (call);
        data = await response.json();

        dataCapture(data);

    }

    //capture Recipe API data
    const [addRecipe, {error} ] = useMutation(ADD_RECIPE);

    function dataCapture (data) {

        console.log(data.recipes[1].id);

        //store data from API nested in data variable
        for (let i = 0; i < data.recipes.length; i++) {

            let apiID = data.recipes[i].id;
            apiID = apiID.toString();
            let title = data.recipes[i].title;


            const dataSubmit = async () => {
                try {
                    const mutationResponse = await addRecipe({
                        variables: {
                            apiID: apiID,
                            title: title
                        }
                    });

                    if (error) {
                        throw new Error('something went wrong');
                    };
                    //console.log(mutationResponse);
                    console.log("Recipe Saved");
                } catch (e) {
                    console.log(e)
                }
            }

            dataSubmit();


        }
    }



    return (
        <section onClick = {() => getNewRecipes(call)}>
            <button>Generate</button>
        </section>
    )
}

export default RecipeCall;


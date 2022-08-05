import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RECIPE } from '../../utils/mutations';
<<<<<<< HEAD
import { Redirect } from 'react-router-dom';
=======
>>>>>>> 6c21e0d7abd934f85f7c749e552760bbd46c5dbf

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

<<<<<<< HEAD
=======
        console.log(data.recipes[1].id);

>>>>>>> 6c21e0d7abd934f85f7c749e552760bbd46c5dbf
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
<<<<<<< HEAD
                    //console.log(mutationResponse);
                    console.log("Recipe Saved");
=======
                    console.log(mutationResponse);
>>>>>>> 6c21e0d7abd934f85f7c749e552760bbd46c5dbf
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


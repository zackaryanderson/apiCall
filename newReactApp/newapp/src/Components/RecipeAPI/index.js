import React from 'react';

function recipeCall() {

    let apiKey = "b0c7f65173eb4810a62bd72e96c8563f";
    let call = "https://api.spoonacular.com/recipes/random?number=5&apiKey=" + apiKey;

    async function getNewRecipes (call){

        let response = await fetch (call);
        let data = await response.json();

        console.log(data);

    }

    return (
        <section onClick = {() => getNewRecipes(call)}>
            <a href="#clickme">Click Me</a>
        </section>
    )
}

export default recipeCall;


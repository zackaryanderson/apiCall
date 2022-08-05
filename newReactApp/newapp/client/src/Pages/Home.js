import React from 'react';
import PreviousRecipes from '../Components/PreviousRecipes';


//create page that has previous recipes on them 
//previous recipes are clickable and take you to the RecipePage for that specific recipe
    //could have recipe be saved in global state with all new recipes that are generated for easy access.



    function Home() {


        return (

            <div>
                <div>
                    <h2 className="font-bold">Previously Searched Recipes:</h2>
                </div>

                <PreviousRecipes />
            </div>

        );


    }

    export default Home;

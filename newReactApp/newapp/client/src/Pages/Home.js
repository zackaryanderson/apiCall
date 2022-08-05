import React from 'react';
import PreviousRecipes from '../Components/PreviousRecipes';



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

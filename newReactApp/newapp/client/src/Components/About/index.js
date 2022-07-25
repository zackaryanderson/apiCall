import React from 'react';
//import coverImage from "../../assets/IMG_0019.jpg";

//imports to use queries
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RECIPES } from '../../utils/queries';

function About () {

    //use useQuery to make request
    const { loading, data } = useQuery(QUERY_RECIPES);

    const recipes = data?.recipes || [];
    console.log(recipes);

    return (
        <div className="flex justify-center">
            {recipes && recipes.map(recipe => (
                <div>
                    <h3>{recipe.title}</h3>
                    <h4>{recipe.apiID}</h4>
                </div>
            ))}
        </div>
    )

}

export default About;



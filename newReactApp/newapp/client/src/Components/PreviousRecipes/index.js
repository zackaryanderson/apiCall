import React from 'react';

//imports to use queries
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RECIPES } from '../../utils/queries';
import { Link } from "react-router-dom";

function PreviousRecipes () {

    //use useQuery to make request
    const { loading, data } = useQuery(QUERY_RECIPES);

    const recipes = data?.recipes || [];
    console.log(recipes);

    return (
        <div className="flex justify-center">
            {recipes && recipes.map(recipe => (
                <div>
                    <Link to={`/recipe/${recipe.apiID}`}>
                        <h3>{recipe.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )

}

export default PreviousRecipes;



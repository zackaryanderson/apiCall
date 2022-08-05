import { useReducer } from 'react'; 

import {
    UPDATE_RECIPES,
    UPDATE_CURRENT_RECIPE
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        //if action is UPDATE_RECIPES
        case UPDATE_RECIPES: 
        return {
            ...state,
            recipes: [...action.recipes],
        };

        //if action is UPDATE_CURRENT_RECIPE
        case UPDATE_CURRENT_RECIPE: 
        return {
            ...state,
            currentRecipe: {...action.currentRecipe},
        };

        default: 
        return state;
    }
};


export function useRecipeReducer(initialState) {
    return useReducer(reducer, initialState);
}
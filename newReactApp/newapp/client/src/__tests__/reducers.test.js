import {
    UPDATE_RECIPES,
    UPDATE_CURRENT_RECIPE
} from '../utils/actions';

import {reducer} from '../utils/reducers';

//add initail state for manipulation
const initialState = {
    recipes: [{},{},{},{},{}],
    currentRecipe: [{ title: 'Food', apiID: '12345' }]
};

//test
test('UPDATE_RECIPES' , () => {
    let newState = reducer(initialState, {
        type: UPDATE_RECIPES,
        recipes: [{},{}]
    });

    expect (newState.products.length).toBe(2);
    expect (initialState.products.length).toBe(5);
});
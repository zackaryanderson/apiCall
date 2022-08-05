import React, { createContext, useContext } from 'react';
import { useRecipeReducer } from './reducers';

const StoreContext = createContext();

const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {

    const [state, dispatch] = useRecipeReducer({
        recipes: [],
        currentRecipe: {},
    });

    //console log for sanity check
    console.log(state);
    return <Provider value = {[state, dispatch]} {...props} />;

};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
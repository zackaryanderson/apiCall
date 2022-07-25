import gql from 'graphql-tag';

export const ADD_RECIPE = gql`
    mutation addRecipe ($apiID: String!, $title: String!) {
        addRecipe (apiID: $apiID, title: $title){
            _id
            apiID
            title
            createdAt
        }
    }
`
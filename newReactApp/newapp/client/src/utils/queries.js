import gql from 'graphql-tag';

export const QUERY_RECIPES = gql`
    query recipes {
        recipes {
            _id
            apiID
            title
            createdAt
        }
    }
`;

export const QUERY_SINGLE_RECIPE = gql`
    query recipe ($_id: ID){
        recipe (_id: $_id) {
            _id
            apiID
            title
            createdAt
        }
    }
`;
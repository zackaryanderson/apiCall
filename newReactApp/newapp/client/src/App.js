//import dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';


//Component imports
import Home from './Pages/Home';
import RecipePage from './Pages/RecipePage';
import Nav from './Components/Nav';
import RecipeAPI from './Components/RecipeAPI';

//global state import
import { StoreProvider } from './utils/GlobalState';

const client = new ApolloClient({

  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  
})

function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
          <div className="App">
            <StoreProvider>
              <Nav />
              <RecipeAPI />
              <Switch>

                <Route exact path = "/" component = {Home} />
                <Route exact path = "/recipe/:id" component = {RecipePage} />

              </Switch>
            </StoreProvider>
          </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;

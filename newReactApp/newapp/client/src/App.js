//import dependencies
import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';


//Component imports
import About from './Components/About';
import Nav from './Components/Nav';
import RecipeAPI from './Components/RecipeAPI';

const client = new ApolloClient({

  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  
})

function App() {
  return (
    <ApolloProvider client = {client}>

        <div className="App">

          <Nav></Nav>

          <div className = 'container'>
            <About></About>
            <RecipeAPI></RecipeAPI>
          </div>

        </div>

    </ApolloProvider>
  );
}

export default App;

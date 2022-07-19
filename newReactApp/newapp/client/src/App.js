//import dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';

//Component imports
import About from './Components/About';
import Nav from './Components/Nav';
import RecipeAPI from './Components/RecipeAPI';

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem('id_token')
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		})
	},
	uri: '/graphql',
})

function App() {
  return (
    <ApoloProvider client = {client}>
      <Router>
        <div className="App">

          <Nav></Nav>
          <About></About>
          <RecipeAPI></RecipeAPI>

        </div>
      </Router>
    </ApoloProvider>
  );
}

export default App;

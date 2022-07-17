import React from 'react';
import About from './Components/About';
import Nav from './Components/Nav';
import RecipeAPI from './Components/RecipeAPI';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Nav></Nav>
      <About></About>
      <RecipeAPI></RecipeAPI>

    </div>
  );
}

export default App;

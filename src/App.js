import React from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <RecipeList></RecipeList>
      <RecipeDetails></RecipeDetails>
    </div>
  );
}

export default App;

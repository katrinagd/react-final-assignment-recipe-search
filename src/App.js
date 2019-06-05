import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

export default class App extends Component {
  state = {
    recipes: recipes,
    url:"https://www.food2fork.com/api/search?key=c27d28f4e6f740f30133e1d84a726ca9",
    details_id: 35375
  };
  // async getRecipes(){
  //   try{
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    // console.log(this.state.recipes);

    return (
      <div>
      {/* <RecipeList recipes={this.state.recipes}></RecipeList> */}
      <RecipeDetails id={this.state.details_id}></RecipeDetails>
    </div>
    )
  }
}


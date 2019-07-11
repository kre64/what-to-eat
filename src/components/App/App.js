import React, { Component } from 'react';

import IngredientList from '../IngredientList/IngredientList';
import RecipeGrid from '../RecipeGrid/RecipeGrid';


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ingredient: "",
			ingredients: [],
			recipes: [],
			requested: false
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.removeIngredient = this.removeIngredient.bind(this)
		this.getRecipes = this.getRecipes.bind(this)
	}

	// Check if ingredient exists, if exists then update ingredients list with new ingredient, 
	// clear input form clear the ingredients list
	handleSubmit(e) {
		e.preventDefault()
		if(this.newIngredient(this.state.ingredient)){
			let joined = this.state.ingredients.concat(this.state.ingredient)
			this.setState({
				ingredients: joined,
			})
			this.input.value = ''
		}
		else {
			console.log("This ingredient already exists!")
		}
	}

	// Update current ingredient with value from input field
	handleChange(e) {
		this.setState({
			ingredient: e.target.value
		})
	}

	// Check if ingredient exists
	newIngredient(ingredient) {
		for (let i = 0; i < this.state.ingredients.length; i++) {
			if(ingredient === this.state.ingredients[i]) {
				return false
			}
		}
		return true
	}

	// Removes an ingredient from the list
	removeIngredient(e) {
		let new_arr = this.state.ingredients.filter(function(value){
			return value !== e.target.id
		})

		this.setState({
			ingredients: new_arr
		})
	}

	getRecipes(e) {
		const csvIngredients = this.state.ingredients.join(',')
		const url = "https://api.allorigins.win/raw?url=http://www.recipepuppy.com/api/?i=" + csvIngredients
		fetch(url)
		.then(response => response.json()).then(data=> {
			console.log(data)
			this.setState({
				recipes: data.results,
				requested: true
			})
		})
		.catch(error => {
			console.log(error);
		})
	}

	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit} onChange={this.handleChange} className="input-group wte-form">
					<input className="form-control form-control-lg" type="text" maxLength="32"
					placeholder="Enter an ingredient" ref={(input) => this.input = input}>
					</input>
					<button type="button" onClick={this.getRecipes}>Go!</button>
            	</form>
				<IngredientList ingredients={this.state.ingredients} removeIngredient={this.removeIngredient} />
				<RecipeGrid requested={this.state.requested} recipes={this.state.recipes} />
				<footer className="wte-footer">
					<small className="text-small muted">Powered by <a href="http://www.recipepuppy.com/" 
					target="_blank" rel="noopener noreferrer" aria-label="GitHub">recipepuppy!</a></small>
				</footer>
			</div>
		);
	}
}

export default App;

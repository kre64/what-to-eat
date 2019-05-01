import React, { Component } from 'react';
import IngredientList from './components/IngredientList'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ingredient: "",
			ingredients: [],
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.removeIngredient = this.removeIngredient.bind(this)
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

	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
					<input className="form-control form-control-lg" type="text" 
					placeholder="Enter an ingredient" ref={(input) => this.input = input}>
					</input>
            	</form>
				<IngredientList ingredients={this.state.ingredients} removeIngredient={this.removeIngredient} />
			</div>
		);
	}
}

export default App;

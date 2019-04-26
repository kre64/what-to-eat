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
	}

	// Update ingredients list with new ingredient and clear form
	// clear the ingredients list
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

	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
					<input className="form-control form-control-lg" type="text" 
					placeholder="Enter an ingredient" ref={(input) => this.input = input}>
					</input>
            	</form>
				<IngredientList ingredients={this.state.ingredients} />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
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
	// check if ingredient already on list !!
	// clear the ingredients list!
	handleSubmit(e) {
		e.preventDefault()
		let joined = this.state.ingredients.concat(this.state.ingredient)
		this.setState({
			ingredients: joined
		})

		this.test()
	}

	handleChange(e) {
		this.setState({
			ingredient: e.target.value
		})
	}

	test() {
		console.log(this.state.ingredient, this.state.ingredients)
	}

	render() {
		return (
			<div className="App">
				<SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
				<IngredientList ingredients={this.state.ingredients} />
			</div>
		);
	}
}

export default App;

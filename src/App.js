import React, { Component } from 'react';
import SearchBar from './components/SearchBar'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
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
		console.log(this.state.ingredients)
	}

	handleChange(e) {
		this.setState({
			ingredient: e.target.value
		})
	}

	render() {
		return (
			<div className="App">
				<SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
			</div>
		);
	}
}

export default App;

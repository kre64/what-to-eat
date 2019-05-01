import React, { Component } from 'react';

// List the ingredients the user has typed in, let users remove ingredients from
// the list
class IngredientList extends Component {
	constructor(props){
        super(props)
        console.log(props)
    }
    
    // This function lists all the ingredients passed from the parent App
    renderIngredients() {
        const ingredients = this.props.ingredients.map((i) => (
            <li key={this.props.ingredients.indexOf(i)} onClick={this.props.removeIngredient} id={i}>
                {i}
            </li>
        ));

        return(
            <ul>
                {ingredients}
            </ul>
        )
    }
    render() {
        return (
            <div>
                Ingredients: {this.renderIngredients()}
            </div>
        )
    }
}

export default IngredientList;
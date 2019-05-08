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
            <li className="list-inline-item ingredient-pill" key={this.props.ingredients.indexOf(i)}>
                {i} <span className="close-btn" onClick={this.props.removeIngredient} id={i}>&times;</span> 
            </li>
        ));

        return(
            <ul className="list-inline">
                {ingredients}
            </ul>
        )
    }
    render() {
        return (
            <div className="container">
                {this.renderIngredients()}
            </div>
        )
    }
}

export default IngredientList;
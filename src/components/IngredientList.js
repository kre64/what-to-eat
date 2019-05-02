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
            <div className="col" key={this.props.ingredients.indexOf(i)}>
                {i}
                <span onClick={this.props.removeIngredient} id={i}>&times;</span>
            </div>
        ));

        return(
            <div className="row">
                {ingredients}
            </div>
        )
    }
    render() {
        return (
            <div className="container">
                Ingredients: {this.renderIngredients()}
            </div>
        )
    }
}

export default IngredientList;
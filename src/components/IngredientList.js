import React, { Component } from 'react';

class IngredientList extends Component {
	constructor(props){
        super(props)
        console.log(props)
    }
    
    renderIngredients() {
        const ingredients = this.props.ingredients.map((i) => (
            <div key={this.props.ingredients.indexOf(i)}>
                {i}
            </div>
        ));

        return(
            <div>
                {ingredients}
            </div>
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
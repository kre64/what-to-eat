import React, { Component } from 'react';

// Grid display of recipes after user requests a query
class RecipeGrid extends Component {
	constructor(props){
        super(props)
        console.log(props)
    }

    renderRecipeGrid() {
        const recipes = this.props.recipes.map((recipe) =>
            <div key={this.props.recipes.indexOf(recipe)}>
                <p>
                    {recipe.href}
                    {recipe.ingredients}
                    {recipe.thumbnail}
                    {recipe.title}
                </p>
            </div>
        )
        return(
            <div className="inner-grid">
                {recipes}
            </div>
        )
    }
    
    render() {
        return (
            <div className="grid-holder">
                {this.renderRecipeGrid()}
            </div>
        )
    }
}

export default RecipeGrid;
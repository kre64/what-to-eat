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
                <div className="col">
                    {recipe.href}
                    {recipe.ingredients}
                    {recipe.thumbnail}
                    {recipe.title}
                </div>
            </div>
        )
        return(
            <div>
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
import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Container from 'react-bootstrap/Container';

// Grid display of recipes after user requests a query
class RecipeGrid extends Component {
	constructor(props){
        super(props)
        console.log(props)
    }

    renderRecipeGrid() {
        const recipes = this.props.recipes.map((recipe) =>
            <div key={this.props.recipes.indexOf(recipe)}>
                <Container fluid>
                    <RecipeCard recipe={recipe}/>
                </Container>
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
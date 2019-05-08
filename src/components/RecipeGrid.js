import React, { Component } from 'react';

// Grid display of recipes after user requests a query
class RecipeGrid extends Component {
	constructor(props){
        super(props)
        console.log(props)
    }
    
    render() {
        return (
            <div className="grid-holder">
                Recipe grid goes here :)
            </div>
        )
    }
}

export default RecipeGrid;
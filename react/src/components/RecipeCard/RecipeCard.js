import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';

// RecipeCard
class RecipeCard extends Component {
	constructor(props){
        super(props)
        console.log(props)
    }
    
    render() {
        return (
            <Row className="text-center wte-recipe-card p-3">
                <Media>
                    <img
                    width="50%"
                    height="100%"
                    className="align-self-center mr-3"
                    src={this.props.recipe.thumbnail}
                    alt="Generic placeholder"
                    id="wte-thumbnail"
                    />
                    <Media.Body>
                    <h5>Recipe by</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <Button variant="dark" href={this.props.recipe.href}>READ FULL RECIPE</Button>
                    </Media.Body>
                </Media>
            </Row>
        )
    }
}

export default RecipeCard;
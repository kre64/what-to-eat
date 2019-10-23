import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// RecipeCard
class RecipeCard extends Component {
	constructor(props){
        super(props)
        console.log(props)
    }
    
    render() {
        return (
            <Row>
                <Col xs={6}>
                    <Image src={this.props.recipe.thumbnail} fluid rounded />
                </Col>
            </Row>
        )
    }
}

export default RecipeCard;
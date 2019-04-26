import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props)

		this.state = {
			ingredient: ""
		}
	}
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} onChange={this.props.handleChange}>
                <input className="form-control form-control-lg" type="text" placeholder="Enter an ingredient"></input>
            </form>
        )
    }
}

export default SearchBar;
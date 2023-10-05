import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
    render() {
        return (
            <>
                <div className='card'>
                    <h1>Name: {this.props.name}</h1>
                    <h1>Age: {this.props.age}</h1>
                    {/* <h1>Age: {this.props.key}</h1> */}
                </div>
            </>
        )
    }
}

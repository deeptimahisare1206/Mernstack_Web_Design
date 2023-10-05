import React, { Component } from 'react'

export default class UseProps extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }

    render() {
        return (
            <div>
                <h1 >Use Props</h1> 
                <h1 >hello my name is {this.props.myname} {this.props.surname}</h1> 
            </div>
        )
    }
}

// export default useProps;
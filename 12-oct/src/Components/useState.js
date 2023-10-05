import React, { Component } from 'react'

export default class UState extends Component {
    constructor(){
        super();
        this.state={
            name:"Aman",
            age: 40
        }
    }
    // changeData(){
    //     console.log(this.state);
    //     this.setState({name:"Yash", age:20},
    //     ()=>{console.log(this.state);}
    //     )
    // }
    changeData=()=>{
        console.log(this.state);
        this.setState({name:"Yash", age:20},
        ()=>{console.log(this.state);}
        )
    }
    render() {
        return (
            <div>
                <p>My name is {this.state.name}</p>
                {/* <button onClick={()=>this.changeData()}>Change Data</button> */}
                {/* <button onClick={this.changeData.bind(this)}>Change Data</button> */}
                <button onClick={this.changeData}>Change Data</button>
                {/* <img src={'../../mern.jpg'} width='200px' /> */}
            </div>
        )
    }
}

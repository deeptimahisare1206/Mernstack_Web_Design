import React, { Component } from 'react'

export default class Uncontrolled extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            country: null
        }
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
        let name= event.target.name.value;
        let country= event.target.country.value;
        // console.log(name);
        // console.log(country);
        this.setState({name, country},()=>{
            console.log(this.state);
            event.target.name.value=null;
            event.target.country.value="Select";

        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    Name:<input type='text' name='name'/><br/>
                    Country:<select name='country'>
                        <option>Select</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>China</option>
                    </select><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

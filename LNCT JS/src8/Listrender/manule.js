import React, { Component } from 'react';
import Card from './card';
//shades of perpule
export default class Manule extends Component {
    constructor() {
        super();
        this.state = {
            listRender: [
                { name: "Aman", age: 20 },
                { name: "Shubham", age: 30 },
                { name: "Ravi", age: 40 },
                { name: "Ravi", age: 40 }
                
            ]}}
    render() {
        let useMap = this.state.listRender.map((p,i) =><Card key={i} name={p.name} age={p.age} />);
        return (
            <div>
                //use map method
                {useMap}
                //manuale
                {/* <Card name={this.state.listRender[0].name} age={this.state.listRender[0].age}/>
                <Card name={this.state.listRender[1].name} age={this.state.listRender[1].age}/>
                <Card name={this.state.listRender[2].name} age={this.state.listRender[2].age}/>
                <Card name={this.state.listRender[3].name} age={this.state.listRender[3].age}/> */}
            </div>
        )
    }
}

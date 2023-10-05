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

            ],isShow: true
        }
    }
    showHide=()=>{
        this.setState({isShow: !this.state.isShow},
            // ()=>{console.log(this.state)}
            )
    }

    removeHandler=(index)=>{
        let list=this.state.listRender;
        list.splice(index,1);
        this.setState({listRender:list})
    }
    render() {
        let useMap;
        if(this.state.isShow){
            useMap = this.state.listRender.map((p, i) => <Card 
            key={i} 
            name={p.name} 
            age={p.age} 
            remove={()=>this.removeHandler(i)} />);
        }else{
            useMap='';
        }
        
        return (
            <div>
                <button onClick={this.showHide}>Show/Hide</button>
                {/* use map method */}
                {useMap}
                {/* //manuale */}
                {/* <Card name={this.state.listRender[0].name} age={this.state.listRender[0].age}/>
                <Card name={this.state.listRender[1].name} age={this.state.listRender[1].age}/>
                <Card name={this.state.listRender[2].name} age={this.state.listRender[2].age}/>
                <Card name={this.state.listRender[3].name} age={this.state.listRender[3].age}/> */}
            </div>
        )
    }
}

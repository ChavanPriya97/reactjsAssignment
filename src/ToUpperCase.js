import React from "react";

import './upperCase.css'

class ToUpperCase extends React.Component {

    constructor(){
        super();
        this.state = {
            input : "",
            display : false,
        };
    }

    render(){
        console.log(this.state.input)
        return (
        <div id = "converter">
            <h1> Assignment 1 : Convert to Upper Case</h1>
            <p>converting paragraph to uppercase</p>
            <textarea value = {this.state.input}
                onChange = {(element) => this.setState({input : element.target.value})}
            />
            
            <br />

            <button onClick={ () =>{
                this.setState({  display : !this.state.display,});  }}
            > To Uppercase
            </button>

            {this.state.display  && <p>{this.state.input.toUpperCase()}</p> }
            
        </div>
        );
    }
}

export default ToUpperCase ; 
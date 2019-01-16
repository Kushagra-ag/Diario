import React, { Component } from 'react';
import Welcome from './components/welcome_img.js';
import Main from './components/main.js';

class Home extends Component {
    constructor(props)
    {
      super(props);
  
      this.state = {
        m1: "one",
      };
  
    }
  
    render() {

        return(
            <div>
                
                <h1>Welcome</h1><br/>
                <h4>This is the Homepage</h4><br/>
                <button onClick = {this.props.dataHome.method_1}>Increment</button>
                <button onClick = {this.props.dataHome.method_2}>Decrement</button>
                <p>{this.state.m1}<br/>{this.props.dataHome.count}</p><br/><br/>
                <Main prop1 = {this.props.dataHome.input_click} prop2={this.props.dataHome.arr}/>
            </div>
        );
    }
}

export default Home;



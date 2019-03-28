import React, { Component } from 'react';
//import Welcome from './components/welcome_img.js';
//import Main from './components/main.js';
import clock from '../images/worldclock/world_clock.png'
import calendar from '../images/calendar.png'
import { Link } from 'react-router-dom';

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
                <h4>This is the Homepage</h4><br/><br/><br/>
                <div className="row extraIcons">
                    <div className="col-4 col-md-4">
                        <Link to='/world_clock'><img src={clock} alt="world clock"></img></Link>
                        <br/>
                        World Clock
                    </div>
                    <div className="col-4 col-md-4">
                        <Link to='/calender'><img src={calendar} alt="calendar"></img></Link>
                        <br/>
                        Calender
                    </div>
                    <div className="col-4 col-md-4">
                        <Link to='/video'><img src={calendar} alt="calendar"></img></Link>
                        <br/>
                        Videos
                    </div>
                {/*<button onClick = {this.props.dataHome.method_1}>Increment</button>
                                 <button onClick = {this.props.dataHome.method_2}>Decrement</button>
                                 <p>{this.state.m1}<br/>{this.props.dataHome.count}</p><br/><br/>
                                 <Main prop1 = {this.props.dataHome.input_click} prop2={this.props.dataHome.arr}/>*/}
                </div>
            </div>
        );
    }
}

export default Home;



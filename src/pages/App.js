import React, { Component } from 'react';
import '../App.css';
//import { createStore} from 'redux';
import { connect } from 'react-redux';
import { Header } from './components/header.js';
import HeaderSec from './components/header_secondary.js';
import Sidebar from './components/sidebar.js';
import Home from './home';
import Notes from './notes';
import About from './about';
import News from './news';
import Clock from './world_clock';
import Calender from './calendar';
import Video from './video';
// import Footer from './components/footer.js';
import { Switch, Route, withRouter } from 'react-router-dom';


//React code -
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      m1: "one",
    };

  }

  render() {

    const homeProps = {
      method_1: this.props.method_1,
      method_2: this.props.method_2,
      input_click: this.props.input_click,
      count: this.props.centralState.count,
      arr: this.props.centralState.arr
    };

    const notesProps = {
      delNote: this.props.delNote,
      addNote: this.props.note,
      state: this.props.centralState
    };

    return (
      <div className="App">
        <div className="wrapper">
          <div className="noSidemenu">
            <Sidebar />
          </div>
          <div className="content">
            <Header />
            <HeaderSec /><br />
            <div className="container-fluid">
              <Switch>
                <Route exact path='/' render={props => (<Home {...props} dataHome={homeProps} />)} />
                <Route path='/notes' render={props => (<Notes {...props} dataNotes={notesProps} />)}/>
                <Route path='/about' component={About} />
                <Route path='/news' component={News} />
                <Route path='/world_clock' component={Clock} />
                <Route path='/calender' component={Calender} />
                <Route path='/video' component={Video} />
              </Switch>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//React - Redux code
const mapStateToProps = (state) => {
  return {
    centralState: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    method_1: () => { dispatch({ type: "INC" }) },
    method_2: () => { dispatch({ type: "DEC" }) },
    input_click: (p) => { dispatch({ type: "INSERT", payload: p }) },
    note : (title,content) => {dispatch({type:"NOTES_ADD", title: title, content: content})},
    delNote : (id) => {dispatch({type:"DEL_NOTE", delId: id}); console.log(id)}
  };
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


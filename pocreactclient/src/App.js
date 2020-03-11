import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from 'react-bootstrap';
import axios, { post } from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import POC from './containers/pocContainer';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/home';
import ESOutput from './components/esOutput';
import AddInput from './components/input';
import ProfileShow from './components/profileDailog';
import EDIT from './components/edit';
class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
       <div className="App">
          <Switch>
            <Route  path='/' exact component= {Home}/>
            <Route path="/add" exact component={AddInput} />
            <Route path="/search" exact component={ESOutput} />
            <Route path="/edit" exact component={EDIT} />
            <Route path="/show" exact component={ProfileShow} /> 
          </Switch>
       </div>
    );
  }

}

export default App;

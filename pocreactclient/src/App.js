import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import axios, { post, get } from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import POC from './containers/pocContainer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import ESOutput from './components/esOutput';
import AddInput from './components/input';
import ProfileShow from './components/profileDailog';
import EDIT from './components/edit';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const URLPOST = 'http://localhost:8001/api/users';
    const URLGET = 'http://localhost:8001/api/users/current';
    const URLPOSTUSERLOGIN = 'http://localhost:8001/api/users/login';
    var datapost = {
      "user": {
        "email": "jatin345anand@gmail.com",
        "password": "test"
      }
    };
    var dataget = {
      "Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphdGluMzQ1YW5hbmRAZ21haWwuY29tIiwiaWQiOiI1ZTY5ZDdiNzNhNmJlMjIzMGNlMjI3YTYiLCJleHAiOjE1ODkxNzg4MDcsImlhdCI6MTU4Mzk5NDgwN30.HVWUhkp_XnweEedCRThtFeG-uVyLK3GKXlk7thIbJz4",
      "Content-Type": "application/json"
    }
    // post(URLPOSTUSERLOGIN, datapost).then(res => {
    //   console.log('Output of JWT in React', res);
    //   console.log(res.statusText);
    // });
    //   var userID ="5e6a0ddb22938e47a44c7ae0"; 
    //   get(URLGET,userID).then(res => {
    //     console.log(res); 
    //     console.log(res.statusText);
    // });
    // var newURLLogin = 'http://localhost:8001/user/login';
    // var newUserData = {
    //   "username": 'user123',
    //   "password": '1234'
    // };
    // post(newURLLogin, newUserData).then(res => {
    //   console.log('Output of JWT in React', res);
    //   console.log(res.statusText);
    // });
    var authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphdGluMzQ1YW5hbmRAZ21haWwuY29tIiwiaWQiOiI1ZTY5ZDdiNzNhNmJlMjIzMGNlMjI3YTYiLCJleHAiOjE1ODkxNzg4MDcsImlhdCI6MTU4Mzk5NDgwN30.HVWUhkp_XnweEedCRThtFeG-uVyLK3GKXlk7thIbJz4';
    fetch(URLGET, {
      method: 'GET',
      headers: {
        'Authorization': 'Token ' + authToken,
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
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

import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from 'react-router-dom';
import { Button, Input, Form } from 'react-bootstrap';
export default class LOGIN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            token:'',
            iddb:''
        };
        this.email = this.takeEmail.bind(this);
        this.password = this.takePassword.bind(this); 
        this.login = this.LOGIN.bind(this);
        this.logout = this.LOGOUT.bind(this);
        this.forgetps = this.FORGETPS.bind(this); 
    }
    takeEmail =(event)=>{
        this.setState({ email: event.target.value });
    }
    takeEmail =(event)=>{
        this.setState({ email: event.target.value });
    }
    FORGETPS = (event)=>{
        console.log('in forget password');
    }
    
    LOGIN = (event)=>{
        console.log('in login');
    }
    
    LOGOUT = (event)=>{
        console.log('in logout');
    }
    
    render() {
        return (
            <div className="App">
                <br></br>
                <br></br>
            <div class="form-group">
              <label >--:Email:--</label>
              <input type="text" class="form-control" onChange={this.email} id="fn" placeholder="" />
            </div>
            <div class="form-group">
              <label >--:Password:--</label>
              <input type="password" onChange={this.password} class="form-control" id="sn" placeholder="" />
            </div>
            <br></br>
            <Button  class="btn btn-primary"  onClick={this.login}>LOGIN</Button>&nbsp; &nbsp;
             <Button  onClick={this.logout} class="btn btn-success"  >LOGOUT</Button>&nbsp; &nbsp;
             <Button  class="btn btn-primary"  onClick={this.forgetps}>FORGET PASSWORD</Button>&nbsp; &nbsp;
             <Button as={NavLink} to={'/signup'}  class="btn btn-primary"  >SIGNUP</Button>
              
    
          </div>
        );
    }
} 
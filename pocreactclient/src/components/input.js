import React, { Component } from 'react';
import { Button, Input, Form } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios, { post,get } from 'axios';
import { NavLink } from 'react-router-dom';
import USEROPERATIONS from '../models/userOperation';
import USERC from '../models/userClass';
class InputPoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fn: '',
      ln:'',
      skills:'',
      profileImg:null,
      resume:null
    };
    this.takefn = this.takeFN.bind(this);
    this.takesn = this.takeLN.bind(this);
    this.takeskills = this.takeSkills.bind(this);
    this.takeprofile = this.takeProfile.bind(this);
    this.takeresume = this.takeResume.bind(this);
    this.add = this.ADD.bind(this);
    this.back = this.BACK.bind(this);
  }
  takeFN = (event) => {
    // console.log('fn in Container', event.target.value);
    this.setState({ fn: event.target.value });
  }
  takeLN = (event) => {
    // console.log('fn in Container', event.target.value);
    this.setState({ ln: event.target.value });
  }
  takeSkills = (event) => {
    // console.log('fn in Container', event.target.value);
    this.setState({ skills: event.target.value });
  }
  takeProfile = (event) => {
    console.log('fn in Container', event.target.value);
    this.setState({ profileImg: event.target.files[0] });
    console.log('fn in after Container', event.target.value);
  }
  takeResume = (event) => {
    // console.log('fn in Container', event.target.value);
    this.setState({ resume: event.target.files[0] });
  }
  componentDidUpdate(){
  
  }
  BACK = (event)=>{
    // const URL2 = 'http://localhost:4000/find';
    // // USEROPERATIONS.REMOVEALLUSER();
    // get(URL2).then(res => {
    //     for(let i=0;i<res.data.length;i++){
    //         console.log(res.data[i].fn);
    //         USEROPERATIONS.ADDUSER(res.data[i].fn,res.data[i].sn,res.data[i].skills,res.data[i].profile,res.data[i].resume);
    //     }
    //     console.log(res.statusText);
    // });
  }
  ADD = (event) => {
    console.log(event.target.value);
    console.log('clicked Add', this.state);
    // USEROPERATIONS.ADDUSER(this.state.fn,this.state.ln,this.state.skills,this.state.profileImg,this.state.resume);
    const data = new FormData();
    
    data.append('fn', this.state.fn);
    data.append('ln',this.state.ln);
    data.append('skills',this.state.skills);
    data.append('file',this.state.profileImg);
    data.append('file',this.state.resume);
     
    const URL = 'http://localhost:4000/add';
    post(URL, data).then(res => {
      console.log(res.statusText);
    });
    
  }
  render() {
    return (
      <div className="App">
        <div class="form-group">
          <label >--:First Name:--</label>
          <input type="text" class="form-control" onChange={this.takefn} id="fn" placeholder="" />
        </div>
        <div class="form-group">
          <label >--:Second Name:--</label>
          <input type="text" onChange={this.takesn} class="form-control" id="sn" placeholder="" />
        </div>
        <div class="form-group">
          <label for="skills">--:Skills:--</label>
          <input type="text" class="form-control" onChange={this.takeskills} id="skills" placeholder="" />
        </div>
        <div class="form-group">
          <label for="profile">--:Profile Picture:--</label>
          <input type="file" name="profile" class="form-control-file" onChange={this.takeprofile} id="profile" />
        </div>

        <div class="form-group">
          <label for="resume">--:Resume:--</label>
          <input type="file" name="resume" class="form-control-file" onChange={this.takeresume} id="resume" placeholder="" />
        </div>
        <Button as={NavLink} class="btn btn-primary" to={"/add"} onClick={this.add}>ADD</Button>&nbsp; &nbsp;
         <Button as={NavLink} onClick={this.back} class="btn btn-success" to={"/"}  >BACK</Button>


      </div>

    );
  }
}
export default InputPoc;
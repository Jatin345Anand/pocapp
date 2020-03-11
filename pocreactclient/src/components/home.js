import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Output from './output';
import { Button } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import ESOutput from './esOutput';
import AddInput from './input';
import axios, { post, get } from 'axios';
import { NavLink } from 'react-router-dom';
import USEROPERATIONS from '../models/userOperation';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            users: null
        }
        this.goToSearch = this.goToSearch.bind(this);
        this.goToAdd = this.goToAdd.bind(this);


    }
    componentDidMount() {
        console.log(USEROPERATIONS.REMOVEALLUSER());
        const URL = 'http://localhost:4000/find';
        // const response = await fetch(URL);
        // const data = await response.json();
        // this.setState({users:data.results[0],loading:false});
        // console.log(this.state);        
        // for (let i = 0; i < res.data.length; i++) {
        //     console.log(res.data[i].fn);
        //     USEROPERATIONS.ADDUSER(res.data[i].fn, res.data[i].sn, res.data[i].skills, res.data[i].profile, res.data[i].resume);
        // }  
        get(URL).then(res => {
            for (let i = 0; i < res.data.length; i++) {
                console.log(res.data[i].fn);
                // let link = document.createElement('a');
                // link.style.display = "none"; // because Firefox sux
                // document.body.appendChild(link); // because Firefox sux
                // // link.href = "data:application/octet-stream," + encodeURIComponent(res.data[i].profile);
                // link.href = encodeURIComponent(res.data[i].profile);
                // link.download = res.data[i].profile.filename;
                // link.click();
                // document.body.removeChild(link);
                USEROPERATIONS.ADDUSER(res.data[i].fn, res.data[i].ln, res.data[i].skills, res.data[i].profile, res.data[i].resume);
            }
            this.setState({ users: USEROPERATIONS.GETUSERS() });
            console.log(res.statusText);
        });
        console.log(this.state);
    }

    goToSearch = (event) => {
        console.log('Go to Search');

    }
    goToAdd = (event) => {
        console.log('Go to Add');
        console.log('state is ', this.state);
    }
    render() {
        // if(this.state.loading){
        //     return <div>Loading..</div>
        // }
        // if(!this.state.users){
        //     return <div>Did not get Users</div>
        // }
        console.log('Users in Render', USEROPERATIONS.GETUSERS());
        return (
            <div>
                <h1>JOB SEEKERS | EMPLOYEE DETAILS | POC APP</h1>
                <input type="text" class="form-control" id="query" placeholder="" />

                <br></br>

                <Button as={NavLink} to={"/search"} onClick={this.goToSearch}>SEARCH</Button>
                <br></br>
                <Button as={NavLink} to={"/add"} onClick={this.goToAdd}>ADD</Button>
                <br></br>
                <Output />
            </div>
        );
    }

}
export default Home;

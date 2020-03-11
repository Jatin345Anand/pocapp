import React, {Component} from 'react';
import {Button, Input, Form} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import userOperation from '../models/userOperation';
import userClass from '../models/userClass';
import User from './user';
const OutputPoc = (props)=>{
console.log('users in Output',userOperation.GETUSERS());

 return (
    <div>
    <table className="table table-bordered">
        <thead>
            <tr>
            <th>Image / Profile </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Skills</th> 
            <th>Resume</th>
            <th>Action</th> 
            </tr>
        </thead>
        <tbody>
            {userOperation.GETUSERS().map((IO)=><User  user ={IO}/>)}
            
        </tbody>
    </table>
 </div>
 );
}
export default OutputPoc; 
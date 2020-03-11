import React, { Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import path from 'path';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markClass: ""
        };
        this.UC = this.classUpdate.bind(this);
    }
    classUpdate=(e1)=>{
        console.log('deleted...',e1);
        // let myclass='red';
        // this.setState({markClass:myclass});
    }
    
    render() {
        var ImageFilePath = path.join(__dirname,'../../');
        // {require(`${this.props.user.profile.path}`)}
        console.log('state of User C',__dirname, __filename);
        
        console.log('props of User C',this.props.user);
        return (
            <tr className={this.state.markClass}>
                <td> <img src={this.props.user.profile.path} class="" /></td>
                <td>{this.props.user.fn} </td>
                <td>{this.props.user.ln} </td>
                <td>{this.props.user.skills} </td>
                <td>{this.props.user.resume.originalname}  </td>
                <td>
                <Button as={NavLink} class="btn btn-primary" to={"/show"}>Show</Button> &nbsp;
                    <Button as={NavLink} class="btn btn-primary" to={"/edit"}>Edit</Button>&nbsp;
            <button id="edit" type="button" onClick={this.UC} class="btn btn-danger icon">Delete</button>
                </td>
            </tr>
        );
    }

}
export default User;

import React, { Component } from "react";
import "../main.css";
import Logo from "../logo.png";
class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateCredentials = this.validateCredentials.bind(this);
    }

    handleChange(event)
    {
        this.setState({[event.target.name] : event.target.value});
    }

    validateCredentials(event)
    {
        if(this.state.username ==="admin" && this.state.password === "admin")
        {
            window.localStorage.setItem("user",this.state.username);
            console.log("authentication successful");
            return (window.location.href = "/dashboard");
        }
        else
        {
            return window.alert("Invalid username or password.")
        }
    }

    render()
    {
        return(
            <div>
            <center><img  id = "logo" src = {Logo} width = "200px" height = "200px" alt={""}></img></center>
            <div class = "login-form">
                <label>Username :</label>
                <input  id = "username" type = "text" value = {this.state.username} onChange = {this.handleChange} name = "username"></input>
                <br></br>
                <label>Password :</label>
                <input id = "password" type = "password" value = {this.state.password} onChange = {this.handleChange} name = "password"></input>
                <br></br>
                <br></br>
                <center>
                <button class="waves-effect waves-light btn-large" onClick = {this.validateCredentials}>Login</button>
                </center>
            </div>
            </div>
        )
    }
}

export default Login;
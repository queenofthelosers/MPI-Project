import React from "react";
import Logo from "../logo.png"
import {NavLink} from "react-router-dom"
class AppHeader extends React.Component{
    constructor()
    {
        super()
        this.logout = this.logout.bind(this);
    }
    logout()
    {
        window.localStorage.removeItem("user");
        return (window.location.href = "/")
    }
    render()
    {
        return(
            <div>
            <div id = "dash-logo">
                <NavLink to="/dashboard"><img src = {Logo} height ="100px" width = "100px" alt={""}></img></NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div id = "logo-text"><b>MSB Security</b></div>
                <button onClick = {this.logout} id = "logout-btns" class="btn waves-effect waves-light red lighten-2">&nbsp;&nbsp;Logout&nbsp;&nbsp;</button>
            </div>
            
            </div>
        )
    }
}

export default AppHeader;
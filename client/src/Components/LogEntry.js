import React from "react";
import CarIcon from "../car-icon.png"
class LogEntry extends React.Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return(
            <li class="collection-item avatar">
                <img src={CarIcon} alt="" class="circle"/>
                <span class="title">Title</span>
                <p>First Line <br/>
                    Second Line
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        )
    }
}

export default LogEntry;
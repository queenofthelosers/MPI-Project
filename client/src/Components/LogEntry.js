import React from "react";
import CarIcon from "../car-icon.png"
class LogEntry extends React.Component
{
    render()
    {
        return(
            <li class="collection-item avatar">
                <img src={CarIcon} alt="" class="circle"/>
                <span class="title">{this.props.data.plate_num.toUpperCase()}</span>
                <p> {this.props.data.username} <br/>
                    {this.props.data.time_visit} <br/>
                    {this.props.data.owner_flag !== "True" ? this.props.data.purpose_visit : null}
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        )
    }
}

export default LogEntry;
import React from "react";
import AppHeader from "./AppHeader";
import CarIcon from "../car-icon.png"
import LogEntry from "./LogEntry";
class CarLogs extends React.Component
{
    constructor(){
        super()
    }

    render()
    {
        return(
            <div>
                <AppHeader></AppHeader>
                <center><div class = "logs-heading"><h3>Logs</h3></div></center>
                <ul class="collection" id = "logs">
                    <LogEntry></LogEntry>
                    <LogEntry></LogEntry>
            </ul>
            </div>
        )
        
    }
}

export default CarLogs;
import React from "react";
import AppHeader from "./AppHeader";
import LogEntry from "./LogEntry";
import axios from "axios";
class CarLogs extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            loaded: false,
            placeholder: "Loading",
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/visitor/")
        .then(res => {
          this.setState({ records: res.data, loaded: true });
            // console.log(res.data);
        })
    }

    render()
    {
        return(
            <div>
                <AppHeader></AppHeader>
                <center><div class = "logs-heading"><h3>Logs</h3></div></center>
                <ul class="collection" id = "logs">
                    {
                        this.state.records.length !== 0 ? this.state.records.map(record => {
                            return(
                                <LogEntry data={record}></LogEntry>
                            )
                        }) : 
                        <div>
                            <h1>No Logs!</h1>
                        </div>
                    }
                </ul>
            </div>
        )
    }
}

export default CarLogs;
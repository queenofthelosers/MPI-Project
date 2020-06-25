import React from "react";
import AppHeader from "./AppHeader";
import axios from "axios";
import LogEntry from "./LogEntry";

class Requests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "N/A",
            plate_num: "N/A",
            owner_flag: "N/A",
            purpose_visit: "N/A",
            time_visit: "N/A",
            loaded: false,
            updated: false
        }
        this.update_record = this.update_record.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePurposeVisit = this.handleChangePurposeVisit.bind(this);
    }

    handleChangeUserName(event) {
        this.setState({username: event.target.value});
    }

    handleChangePurposeVisit(event) {
        this.setState({purpose_visit: event.target.value});
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/visitor/visitor_status/")
        .then(res => {
          this.setState({ loaded: true, 
            username: res.data.username, 
            purpose_visit: res.data.purpose_visit,
            owner_flag: res.data.owner_flag,
            plate_num: res.data.plate_num,
            time_visit: res.data.time_visit});
            if (res.data.username !== "None") {
                this.setState({updated: true});
            }
        })
    }

    update_record(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/visitor/update_visitor/', 
        {
            username: this.state.username,
            plate_num: this.state.plate_num,
            owner_flag: this.state.owner_flag,
            purpose_visit: this.state.purpose_visit,
            time_visit: this.state.time_visit
        },
        {
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => {
            console.log(res.data);
            this.setState({updated: true})
        })
        .catch(err => console.log(err));
    }

    render() {
        const data = {
            username: this.state.username,
            plate_num: this.state.plate_num,
            owner_flag: this.state.owner_flag,
            purpose_visit: this.state.purpose_visit,
            time_visit: this.state.time_visit
        }
        return (
            <div>
                <AppHeader></AppHeader>
                <center><div class = "logs-heading"><h3>Logs</h3></div></center>
                <ul class="collection" id = "logs">
                    {!this.state.updated ? 
                        <form onSubmit={this.update_record}>
                            <center><h3>Enter Info</h3></center>
                            <label>
                                Name: 
                                <input type="text" name="name" onChange={this.handleChangeUserName} />
                            </label>
                            <label>
                                Purpose of Visit: 
                                <input type="text" name="purpose_visit" onChange={this.handleChangePurposeVisit} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    :  <LogEntry data={data} /> }
                </ul>
            </div>
        )
    }
}

export default Requests;
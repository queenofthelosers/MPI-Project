import React from "react";
import AppHeader from "./AppHeader";
import { NavLink } from "react-router-dom";
// import Webcam from "react-webcam";
 


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            videoConstraints: 
            {
                width: { min: 480 },
                height: { min: 720 },
                aspectRatio: 0.6666666667
            }
        }
    }
    
    render()
    {
        return(
            <div>
                <AppHeader></AppHeader>
                <div id = "card-holder">
                    <div class="row">
                        <div class="col s12 m4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                            <span class="card-title">Active Requests</span>
                            <p>Update/View Active Requests</p>
                            </div>
                            <div class="card-action">
                            <NavLink to="/requests">View logs of current vehicle</NavLink>
                            </div>
                        </div>
                        </div>
                        <div class="col s12 m4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                            <span class="card-title"><i class = "small material-icons">camera_enhance</i>&nbsp;&nbsp;Upload Image</span>
                            <p>Upload image of license plate of car that has arrived at apartment premises for identification.</p>
                            </div>
                            <div class="card-action">
                            <NavLink to = "/upload">Proceed to Upload</NavLink>
                            </div>
                        </div>
                        </div>
                        <div class="col s12 m4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                            <span class="card-title"><i class = "small material-icons">description</i>&nbsp;&nbsp;View Logs</span>
                            <p>View logs of the vehicles that have entered apartment premises, sorted by date.</p>
                            </div>
                            <div class="card-action">
                            <NavLink to="/carlogs">View logs of vehicles</NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <div class="row">
                        <Webcam 
                            videoConstraints={this.state.videoConstraints} 
                            width={410} 
                            height={300}
                        />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard;
 
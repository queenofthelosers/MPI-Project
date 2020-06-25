import React, { Component } from "react";
import AppHeader from "./AppHeader"
import DefaultImage from "../defaultupload.jpg"

class UploadImage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedFile : null,
            imgURL : '',
            uploaded:false,
            licenseplate:''
        }
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.processLicensePlate = this.processLicensePlate.bind(this);
        
    }

    fileUploadHandler(event)
    {
        this.setState({
            selectedFile : event.target.files[0],
            imgURL : URL.createObjectURL(event.target.files[0]),
            uploaded:true
        })
    }

    processLicensePlate(event)
    {
        //backend call to API to return result and add it to the logs
        if(this.state.uploaded===false)
        {
            return (window.alert("Please upload a file!"));
        }
        else
        {
            console.log(this.state.selectedFile)
            console.log(this.state.imgURL);
            const fd = new FormData();
            fd.append('upload',this.state.selectedFile);
            fd.append('regions','in')
            console.log(fd);
            fetch("https://cors-anywhere.herokuapp.com/https://api.platerecognizer.com/v1/plate-reader/", {
                method: 'POST',
                headers: {
                    "Authorization": "Token 3e218dc76c72d28424cd04ff95daad2dbe8cf735",
                    "Access-Control-Allow-Origin" : "*"
                },
                body: fd
            }).then(res => res.json())
            .then((json) => {
                console.log(json);
                console.log(json.results[0].plate)
                this.setState({licenseplate:json.results[0].plate})
            })
            .catch((err) => {
                console.log(err);
            });
           
        }
    }
    
    render()
    {
        const text = "License Plate Detected : "
        return(
            <div>
                <AppHeader></AppHeader>
                <center>
                <div class = "image-upload">
                    <img src = {(this.state.uploaded)?this.state.imgURL:DefaultImage} alt={""}></img>
                    <br></br>
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="file-upload">
                    <input  id = "file-upload" type = "file" onChange = {this.fileUploadHandler}></input>
                    </label>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button class="waves-effect waves-light btn" onClick = {this.processLicensePlate}>Upload File</button>
                    <br></br>
                    <p id = "license-plate-result">{this.state.licenseplate !== ''?(text+" "+this.state.licenseplate):("License Plate Here")}</p>
                </div>
                </center>
            </div>
        )
    }
}

export default UploadImage;
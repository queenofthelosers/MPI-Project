import React from "react";
import AppHeader from "./AppHeader"
import DefaultImage from "../defaultupload.jpg"
class UploadImage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedFile : null,
            imgURL : '',
            uploaded:false
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
        if(this.state.uploaded==false)
        {
            return (window.alert("Please upload a file!"));
        }
    }
    
    render()
    {
        return(
            <div>
                <AppHeader></AppHeader>
                <center>
                <div class = "image-upload">
                    <img src = {(this.state.uploaded)?this.state.imgURL:DefaultImage}></img>
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
                </div>
                </center>
            </div>
        )
    }
}

export default UploadImage;
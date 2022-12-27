import React from "react";
import { useLocation } from "react-router-dom";
import "./profile.scss";
import Dropzone, { useDropzone } from "react-dropzone";

function Profile() {
    const location = useLocation();
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

    return (
        <div className="profilePage">
            <div className="profile">
                <div>Username: {location.state.userName}</div>
                <img
                    className="profile--picture"
                    src="images/profile_pictures/placeholder.jpg"
                ></img>
            </div>
            <div>
                <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>Change Profile Picture</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;

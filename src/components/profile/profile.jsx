import React from "react";
import { useLocation } from "react-router-dom";
import "./profile.scss";
import Dropzone, { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

    return (
        <div className="profilePage">
            <div className="profile">
                <div>
                    {location.state
                        ? "Username:" + location.state.userName
                        : "Not logged in"}
                </div>
                <div>
                    {location.state ? (
                        <img
                            className="profile--picture"
                            src="images/profile_pictures/placeholder.jpg"
                        ></img>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Profile;

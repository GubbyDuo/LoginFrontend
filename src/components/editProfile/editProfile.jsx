import { useDropzone } from "react-dropzone";
import "./editProfile.scss";
import axios from "axios";
import Cookies from "js-cookie";
import { useCallback, useContext } from "react";
// import { userContext } from "../../App";

function EditProfile() {
    // const [userName, setUserName] = useContext(userContext);

    const onDrop = useCallback((acceptedFiles) => {
        const token = Cookies.get("jwt");
        const formData = new FormData();
        formData.append("File", acceptedFiles[0]);
        console.log(formData);
        axios({
            method: "post",
            url: "http://localhost:8080/user/uploadProfilePicture",
            data: formData,
            headers: {
                Authorization: token,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const { getInputProps, getRootProps } = useDropzone({
        accept: { "image/png": [".png"], "image/jpg": [".jpg"] },
        onDrop,
    });

    return (
        <div className="page">
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Change Profile Picture</p>
            </div>
        </div>
    );
}

export default EditProfile;

import { useDropzone } from "react-dropzone";
import "./editProfile.scss";
import AWS from "aws-sdk";

function EditProfile() {
    const onDrop = () => {};

    const { getInputProps, getRootProps, acceptedFiles } = useDropzone({
        accept: { "image/png": [".png"], "image/jpg": [".jpg"] },
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

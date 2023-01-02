import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./registerForm.scss";

function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        email: "",
        firstName: "",
    });

    function handleSubmit(event) {
        event.preventDefault();

        axios
            .post("http://localhost:8080/user/new", {
                userName: formData.userName,
                password: formData.password,
                email: formData.email,
                firstName: formData.firstName,
            })
            .then(function (response) {
                console.log(response);
                localStorage.setItem("Token", response);
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="registerBody">
            <form className="registerForm" onSubmit={handleSubmit}>
                <label for="Username">
                    Username:
                    <input
                        type="text"
                        name="userName"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label for="Password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label for="Email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label for="FirstName">
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Register</button>
                <br />
                <button onClick={() => navigate("/")}>Home</button>
            </form>
        </div>
    );
}

export default RegisterForm;

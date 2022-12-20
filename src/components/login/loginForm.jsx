import React, { useState } from "react";
import axios from "axios";
import "./loginForm.scss";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post("http://localhost:8080/user/login", {
                userName: formData.userName,
                password: formData.password,
            })
            .then(function (response) {
                console.log(response);
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
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="userName"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
                <button onClick={() => navigate("/")}>Home</button>
            </form>
        </div>
    );
}

export default LoginForm;

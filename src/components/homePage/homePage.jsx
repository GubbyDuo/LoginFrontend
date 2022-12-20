import { NavLink } from "react-router-dom";
import React from "react";
import "./homePage.scss";

function Home() {
    return (
        <div className="homePage">
            <NavLink to={"./login"}>
                <p>Login</p>
            </NavLink>
            <NavLink to={"./register"}>
                <p>Register</p>
            </NavLink>
        </div>
    );
}

export default Home;

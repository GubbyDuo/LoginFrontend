import { NavLink } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import "./homePage.scss";
import Cookies from "js-cookie";
import { UserContext } from "../../App";

function Home() {
    const [userName, setUserName] = useState(null);

    function logOut() {
        Cookies.remove("jwt");
        setUserName(null);
    }

    useEffect(() => {
        let userNameString = checkLoggedIn();
        setUserName(userNameString);
    }, []);

    function checkLoggedIn() {
        const token = Cookies.get("jwt");
        console.log(token);

        try {
            const payload = jwt.decode(token);
            return payload.sub;
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="homePage">
            <div>{userName ? userName : "No name Found"}</div>
            <div className="loginRegister">
                <NavLink className="homePage--Button" to={"./login"}>
                    <p>Login</p>
                </NavLink>
                <NavLink className="homePage--Button" to={"./register"}>
                    <p>Register</p>
                </NavLink>
                <button onClick={logOut}>Logout</button>
            </div>
        </div>
    );
}

export default Home;

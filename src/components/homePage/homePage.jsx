import { NavLink } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import "./homePage.scss";
import Cookies from "js-cookie";

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
            <div className="profile">
                <p>
                    {userName ? "Logged in as: " + userName : "Not logged in"}
                </p>
                {userName ? (
                    <div>
                        <img
                            src="/images/profile_pictures/placeholder.jpg"
                            className="profile--picture"
                        />
                        <NavLink
                            className="homePage--Button"
                            to={{
                                pathname: "./profile",
                            }}
                            state={{ userName }}
                        >
                            <p>Profile</p>
                        </NavLink>
                    </div>
                ) : null}
            </div>
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

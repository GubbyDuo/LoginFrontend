import { NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import "./homePage.scss";
import Cookies from "js-cookie";
import Profile from "../profile/profile";
import { userContext } from "../../App";
import NavBar from "../navbar/navbar";

function Home() {
    const [userName, setUserName] = useContext(userContext);

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
        <div>
            <div className="bodyContainer">
                <div className="nav">
                    <NavBar />
                </div>
                <div className="homePage">
                    <h2>Profile</h2>
                    <div className="profile">
                        <div>
                            {userName
                                ? "Logged in as: " + userName
                                : "Not logged in"}
                        </div>
                        {userName ? (
                            <div>
                                <img
                                    src="/images/profile_pictures/placeholder.jpg"
                                    className="profile--picture"
                                />
                            </div>
                        ) : null}
                    </div>
                    <div>
                        {userName ? (
                            <NavLink to={"./editProfile"}>
                                Change profile Picture
                            </NavLink>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="loginRegister">
                        {userName ? (
                            <div>
                                <button onClick={logOut}>Logout</button>
                            </div>
                        ) : (
                            <div className="loginRegister">
                                <NavLink
                                    className="homePage--Button"
                                    to={"./login"}
                                >
                                    <p>Login</p>
                                </NavLink>
                                <NavLink
                                    className="homePage--Button"
                                    to={"./register"}
                                >
                                    <p>Register</p>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

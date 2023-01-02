import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../../App";
import "./navbar.scss";

function NavBar() {
    const [userName, setUserName] = useContext(userContext);

    return (
        <div className="navbar">
            <div className="navbar--tab">Lorem</div>
            <div className="navbar--tab">Ipsum</div>
            <div className="navbar--tab">Dolor</div>
            <div className="navbar--tab navbar--tab--login">
                <div>
                    {userName ? (
                        <div className="navbar--tab navbar--tab--login">
                            <div>{userName}</div>
                            <img
                                className="navbar--image"
                                src="images/profile_pictures/placeholder.jpg"
                            ></img>
                        </div>
                    ) : (
                        <NavLink className="login--button" to={"/login"}>
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;

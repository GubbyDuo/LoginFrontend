import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import Home from "./components/homePage/homePage";
import Profile from "./components/profile/profile";
import { createContext, useState } from "react";
import NavBar from "./components/navbar/navbar";
import EditProfile from "./components/editProfile/editProfile";

export const userContext = createContext();

function App() {
    const [userName, setUserName] = useState(null);
    return (
        <div className="App">
            <userContext.Provider value={[userName, setUserName]}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<LoginForm />}></Route>
                        <Route
                            path="/register"
                            element={<RegisterForm />}
                        ></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route
                            path="/editProfile"
                            element={<EditProfile />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </userContext.Provider>
        </div>
    );
}

export default App;

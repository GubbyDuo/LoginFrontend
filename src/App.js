import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import Home from "./components/homePage/homePage";
import Profile from "./components/profile/profile";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<LoginForm />}></Route>
                    <Route path="/register" element={<RegisterForm />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

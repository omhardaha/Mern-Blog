import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Topbar from "./topbar/Topbar";
import Home from "./pages/Home/Home";
import Write from "./Write/Write";
import Setting from "./Setting/Setting";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { Context } from "./context/Context";
import { ContextProvider } from "./context/Context";
import SinglePost from "./SinglePost/SinglePost";
import Footer from "./Footer/Footer";

function App() {
    const { user } = useContext(Context);

    return (
        <>
            <ContextProvider value={{ h: "fdg" }}>
                <Topbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={user ? <Home /> : <Login />}
                    />
                    <Route
                        path="/Setting"
                        element={user ? <Setting /> : <Register />}
                    />
                    <Route
                        path="/Write"
                        element={user ? <Write /> : <Register />}
                    />
                    <Route
                        path="/Register"
                        element={user ? <Home /> : <Register />}
                    />
                    <Route
                        path="/setting"
                        element={user ? <Home /> : <Setting />}
                    />
                    <Route path={`/Post/:id`} element={<SinglePost />} />
                    <Route path={`/page/:number`} element={<Home />} />
                </Routes> 
            </ContextProvider>
        </>
    );
}

export default App;

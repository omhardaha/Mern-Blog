import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Topbar from "./topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./Single/Single";
import Write from "./Write/Write";
import Setting from "./Setting/Setting";
import Login from "./Login/Login";
import Register from "./Register/Register";
function App() {
	return (
		<>
			<Topbar />
			{/* <Route exact path="/" element={<Home />} />
			<Route exact path="Login" element={<Login />} /> */}
			{/* <Home /> */}
			{/* <Single /> */}
			{/* <Write/> */}
			{/* <Setting/>  */}
			{/* <Login/> */}
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/login" element={Login} />
			</Routes>
			<Register />
		</>
	);
}

export default App;

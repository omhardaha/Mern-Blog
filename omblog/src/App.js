import "./App.css";
import Topbar from "./topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./Single/Single";
import Write from "./Write/Write";
import Setting from "./Setting/Setting";
import Login from "./Login/Login";
function App() {
	return (
		<div className="App">
			<Topbar />
			{/* <Home /> */}
			{/* <Single /> */}
            {/* <Write/> */}
            {/* <Setting/>  */}
            <Login/>
		</div>
	);
}

export default App;

import "./App.css";
import Topbar from "./topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./Single/Single";
function App() {
	return (
		<div className="App">
			<Topbar />
			{/* <Home /> */}
			<Single />
		</div>
	);
}

export default App;

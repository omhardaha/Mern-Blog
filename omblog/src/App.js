import "./App.css";
import Topbar from "./topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./Single/Single";
import Write from "./Write/Write";
function App() {
	return (
		<div className="App">
			<Topbar />
			{/* <Home /> */}
			{/* <Single /> */}
            <Write/>
		</div>
	);
}

export default App;

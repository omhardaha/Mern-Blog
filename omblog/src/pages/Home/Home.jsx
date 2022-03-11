import "./Home.css";
import Header from "../../header/header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
export default function Home() {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
                <Sidebar />
			</div>
		</>
	);
}

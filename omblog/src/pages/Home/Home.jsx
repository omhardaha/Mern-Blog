import "./Home.css";
import Header from "../../header/header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
    const [getPosts, setPosts] = useState([])
    const {search} = useLocation()
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/post"+search);
            await setPosts(res.data);
        }
        fetchPosts();
    }, [search])
    return (
        <>
            <Header />
            <div className="home">
                <Posts getPosts={getPosts} />
                <Sidebar />
            </div>
        </>
    );
}

import "./Home.css";
import Header from "../../header/header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [getPosts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/post");
            await setPosts(res.data);
            console.log(res.data);
        }
        fetchPosts();
    }, [])
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

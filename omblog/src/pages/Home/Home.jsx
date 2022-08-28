import "./Home.css";
import Header from "../../header/header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Home() {

    const location = useLocation();
    const postId = location.pathname.split("/");
    // console.log(postId);

    const { setProgress } = useContext(Context);
    const [getPosts, setPosts] = useState([])
    const { search } = useLocation()
    useEffect(() => {
        const fetchPosts = async () => {
            let url;
            if (postId.length === 3) url = `/post/page/${postId[2]}`;
            else url = `/post/page/1`;
            console.log(url);
            const res = await axios.get(url);
            setProgress(50)
            await setPosts(res.data);
            setProgress(100)
        }
        fetchPosts();
    }, [search])
    return (
        <>
            <Header />
            <div className="home-container">
                <div className="home grid lg:grid-cols-3 md:grid-cols-2  gap-4">
                    <div className="col-span-2 ">
                        <Posts getPosts={getPosts} />
                    </div>

                    <div >
                        <Sidebar />
                    </div>
                </div>
                <div className=" pagiNation">
                    <a href="/page/1" className="pagination-button">1</a>
                    <a href="/page/2" className="pagination-button">2</a>
                </div>
            </div>
        </>
    );
}

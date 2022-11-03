import "./Home.css";
import Header from "../../header/header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import { VscLoading } from "react-icons/vsc"
import { Context } from "../../context/Context";
import Slider2 from "../../header/Slider2";
import Footer from "../../Footer/Footer";

export default function Home() {

    const location = useLocation();
    const postId = location.pathname.split("/");
    // console.log(postId);

    const { setProgress } = useContext(Context);
    const [getPosts, setPosts] = useState([])

    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState([]);
    const { search } = useLocation()

    const pagiNation = (pages) => {
        const rows = [];
        for (let i = 1; i <= pages; i++) {
            rows.push(<a key={i} href={`/page/${i}`} className="rounded-lg pagination-button">{i}</a>);
        }
        return rows;
    }
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            let url;
            await setProgress(30)
            if (postId.length === 3) url = `/post/page/${postId[2]}`;
            else url = `/post/page/1`;
            const res = await axios.get(url);

            const totalPosts = await axios.get('/post/length');
            await setPages(totalPosts.data.size / 10 + (totalPosts.data.size % 10 === 0 ? 0 : 1));
            await setPosts(res.data);
            await setProgress(50)
            await setLoading(false);
            // await setTimeout(() => setLoading(false), 1000)
            await setProgress(100)
        }
        fetchPosts();
    }, [search])

    return (
        loading ?
            <>
                <div className="text-center h-96 my-auto flex justify-center items-center align-center">
                    <VscLoading className="text-6xl animate-spin inline" />
                </div>
            </>
            :
            <>
                <Slider2 />
                {/* <Header /> */}
                <div className="home-container">
                    <div className="home ngrid lg:grid-cols-3 md:grid-cols-2  gap-4">
                        <div className="col-span-3 ">
                            <Posts getPosts={getPosts} />
                        </div>
                    </div>
                    <div className=" pagiNation">
                        {pagiNation(pages)}
                        {/* <a href="/page/1" className="rounded-lg pagination-button">1</a>
                        <a href="/page/2" className="rounded-lg pagination-button">2</a> */}
                    </div>
                        
                        
                </div>
        <Footer/>
            </>
    );
}

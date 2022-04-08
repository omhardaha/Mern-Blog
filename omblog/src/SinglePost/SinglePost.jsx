import { useLocation } from "react-router-dom";
import "./SinglePost.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";


export default function SinglePost() {
    const location = useLocation()
    const postId = location.pathname.split("/")[2];

    const { user ,setProgress} = useContext(Context);
    const [getPost, setPost] = useState({})
    useEffect(() => {
        setProgress(40)
        const fetchPosts = async () => {
            const res = await axios.get(`/post/${postId}`);
            await setPost(res.data);
            // console.log(res.data);
            await setProgress(100);
        }
        fetchPosts();
    }, [postId])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {getPost.photo && <img src={"http://localhost:5000/images/" + getPost.photo} alt="" className="singlePostImage" />}
                <h1 className="singlePostTitle">
                    {getPost.title}
                    {
                        user && getPost.username === user.username &&
                        <div className="singlePostEdit">
                            <i className="singlePostEditIcon fa-solid fa-pen-to-square"></i>
                            <i className="singlePostEditIcon fa-solid fa-trash"></i>
                        </div>
                    }
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostauthorName">
                        Author :
                        <Link to={`/?username=${getPost.username}`}>
                            <b>{getPost.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(getPost.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostParagraph">
                    {getPost.desc}
                </p>
            </div>
        </div>
    );
}

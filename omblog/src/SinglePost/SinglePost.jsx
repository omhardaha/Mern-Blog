import { useLocation } from "react-router-dom";
import "./SinglePost.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SinglePost() {
    const location = useLocation()
    const postId = location.pathname.split("/")[2];

    const [getPost, setPost] = useState({})
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`/post/${postId}`);
            await setPost(res.data);
            console.log(res.data);
        }
        fetchPosts();
    }, [])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://images.unsplash.com/photo-1646081499142-3c2945cafdc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    className="singlePostImage"
                />

                <h1 className="singlePostTitle">
                    {getPost.title}
                    <div className="singlePostEdit">
                        <i className="singlePostEditIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostEditIcon fa-solid fa-trash"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostauthorName">
                        Author : <b>{getPost.username}</b>
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

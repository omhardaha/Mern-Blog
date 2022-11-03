import { useLocation } from "react-router-dom";
import "./SinglePost.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { VscLoading } from "react-icons/vsc"
import Footer from "../Footer/Footer";

export default function SinglePost() {
    window.onbeforeunload = function () {
        window.scrollTop(40);
    };
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const { user, setProgress } = useContext(Context);
    const [getPost, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setProgress(40);
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(`/post/${postId}`);
            await setPost(res.data);
            // console.log(res.data);
            await setProgress(100);
            await setTimeout(() => setLoading(false), 1000)
        };
        fetchPosts();
    }, [postId]);

    const handleDelete = async () => {
        try {
            await axios.delete("/post/" + postId, {
                data: { username: user.username },
            });
            await window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    //updatingUser
    const [titleInput, setTitleInput] = useState();
    const [descInput, setDescInput] = useState();
    const [updateMode, setUpdateMode] = useState(false);

    const handleUpdate = async () => {
        console.log("tre");
        try {
            const submitData = {
                username: user.username,
                desc: descInput,
                title: titleInput,
            };
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData),
            };
            const response = await fetch("/post/" + postId, requestOptions);
            const data = await response.json();
            console.log(data);
            await window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        loading ?
            <>
                <div className="text-center h-96 my-auto flex justify-center items-center align-center">
                    <VscLoading className="text-6xl animate-spin inline" />
                </div>
            </>
            :
            <>
            <div className="singlePost col-span-2 px-3 sm:px-40 mb-20">
                <div className="singlePostWrapper">


                    {!updateMode ? (
                        <div>

                            <h1 className="tracking-wider my-10 text-2xl sm:text-4xl  singlePostTitle">
                                {getPost.title}
                            </h1>
                            {user && getPost.username === user.username && (
                                <div className="singlePostEdit text-black">
                                    {/* <i
                                        className="singlePostEditIcon fa-solid fa-pen-to-square"
                                        onClick={() => setUpdateMode(true)}
                                    ></i> */}
                                    <i
                                        className="singlePostEditIcon fa-solid fa-trash"
                                        onClick={handleDelete}
                                    ></i>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <h4 className="text-white">Update Title</h4>
                            <input
                                type="text"
                                id="changeTitle"
                                defaultValue={getPost.title}
                                onChange={(e) => setTitleInput(e.target.value)}
                            />
                        </>
                    )}

                    <div className="singlePostInfo">
                        <span className="singlePostauthorName">
                            Author :
                            <Link to={`/?username=${getPost.username}`}>
                                <b>{getPost.username}</b>
                            </Link>
                        </span>
                        <span className="singlePostDate">
                            {new Date(getPost.createdAt).toDateString()}
                        </span>
                    </div>
                    {getPost.photo && (
                        <div className="image-container flex items-center flex-col" >
                            <img
                            className="rounded"
                                src={
                                    "http://localhost:5000/images/" + getPost.photo
                                }
                                alt=""
                            />
                        </div>
                    )}
                    {!updateMode ? (
                        <p style={{ lineHeight: "37px",wordSpacing: "5px"}} className="my-10 tracking-wide leading-relaxed singlePostParagraph">{getPost.desc}</p>
                    ) : (
                        <>
                            <h4 className="text-white">Change Description</h4>
                            <textarea
                                onChange={(e) => setDescInput(e.target.value)}
                                defaultValue={getPost.desc}
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                            <button className="text-white block border-2 rounded-3xl p-3" onClick={handleUpdate}>Update</button>
                        </>
                    )}
                </div>
            </div>
            <Footer/>
            </>
    );
}

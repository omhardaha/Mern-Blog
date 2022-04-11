import './Setting.css'
import Sidebar from '../Sidebar/Sidebar.jsx'
import React, { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../context/Context";
import axios from 'axios';
export default function Settings() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const { user, setProgress } = useContext(Context);
    console.log(user);
    const handleSubmit = async (e) => {
        console.log("dfgd thtthdtgh");
        e.preventDefault();
        const updatedPost = {
            username: username,
            email: email,
            password: password,
            userId: user._id
        }
        if (file) {
            const data = new FormData();
            data.append('file', file)
            try {
                const res = await axios.post("/upload/", data)
                console.log(res.data);
                updatedPost.profilePic = res.data
                console.log(updatedPost);
            } catch (error) {
                console.log(error);
            }
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPost)
        };
        const response = await fetch('/users/' + user._id, requestOptions);
        const data = await response.json();
        // window.location.reload()
        console.log(data);
    }
    return (
        <>
            <div className='setting'>
                <div className="settingWrapper">
                    <div className="settingTitle">
                        <span className="settingUpdateTitle">
                            Update Your Account
                        </span>
                        <span className="settingDeleteTitle">
                            Delete Your Account
                        </span>
                    </div>
                    <form onSubmit={handleSubmit} className="settingForm">
                        <label htmlFor="">Profile Picture</label>
                        <div className="settingPP">
                            <img src={"http://localhost:5000/images/" + user.profilePic} alt="" />
                            <label htmlFor="fileInput" className="">
                                <i className="settingPPIcon fa-solid fa-circle-user"></i>
                            </label>
                            <input onChange={e => setFile(e.target.files[0])} type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                        <label htmlFor="profileName">UserName</label>
                        <input onChange={e => setUsername(e.target.value)} type="text" id='profileName' placeholder='omhardaha' />
                        <label htmlFor="email">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" id='email' placeholder='omdigital2016@gmail.com' />

                        <label htmlFor="">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" />
                        <button type="submit" className="settingSubmit">
                            Update
                        </button>
                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    )
}

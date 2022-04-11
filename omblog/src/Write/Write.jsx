import React, { useContext, useState, useEffect } from "react";
import "./Write.css";
import axios from 'axios'
import { Context } from "../context/Context";

export default function Write() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)

    const { user, setProgress } = useContext(Context);
    useEffect(() => {
        setProgress(100);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title: title,
            desc: description,
            username: user.username,
        }
        if (file) {
            const data = new FormData();
            data.append('file', file)
            try {
                const res = await axios.post("/upload", data)
                console.log(res.data);
                newPost.photo = res.data
            } catch (error) {
                console.log(error);
            }
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        };
        const response = await fetch('/post', requestOptions);
        const data = await response.json();
        window.location.replace("/post/" + data._id)
        console.log(data);
    }
    return (
        <div className="write">
            {
                (file && <img className="writeImage" src={URL.createObjectURL(file)} alt="" />)}

            <form className="writeForm" action="submit" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" class="fileInputLogo" >
                        <i class=" fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" className="fileInput" onChange={e => setFile(e.target.files[0])} />
                    <input

                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        placeholder="tell your story"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit"> Publish </button>
            </form>
        </div>
    );
}

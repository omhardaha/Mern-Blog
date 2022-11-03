import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsDot } from "react-icons/bs"
import { Link } from "react-router-dom"
export default function Slider2() {
    const [cur, setCurState] = useState(0);
    const [topPost, setTopPost] = useState([]);

    useEffect(() => {

        const fetchPosts = async () => {
            const totalPosts = await axios.get('/top');
            await setTopPost(totalPosts.data);
            console.log(totalPosts);
        }

        fetchPosts();

        const interval = setInterval(() => {
            setCurState((prevCounter) => (prevCounter + 1) % 4);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        // <div className='my-10 text-4xl text-center'>{arr[cur]}</div>
        <>
            <h1 className='text-center font-bold my-16 md:text-4xl text-3xl my-8'>Top Picks</h1>
            {topPost.length > 0 &&
                <>
                    <Link to={"/post/" + topPost[cur]._id}>
                        <div className='transition-all max-w-screen-xl lg:mx-auto mx-8  my-10'>
                            <div className='lg:grid lg:grid-cols-12 gap-8 items-center'>
                                <img className='lg:col-span-5 h-80 objext-cover rounded' src={topPost[cur].photo} alt="fd" />
                                <div className='col-span-7'>
                                    <span className='text-gray-400'> {new Date(topPost[cur].createdAt).toDateString()}</span>
                                    <h1 className='my-3 md:text-3xl text-2xl lg:text-4xl font-bold'>{topPost[cur].title}</h1>
                                    <span className='text-gray-600'>Author : <span className='font-semibold'>{topPost[cur].username}</span></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </>
            }

            <div className='text-center w-full'>
                <BsDot onClick={() => setCurState(0)} className={`inline cursor-pointer text-gray-400 text-4xl ${cur === 0 && "text-orange-400"}`} />
                <BsDot onClick={() => setCurState(1)} className={`inline cursor-pointer text-gray-400 text-4xl ${cur === 1 && "text-orange-400"}`} />
                <BsDot onClick={() => setCurState(2)} className={`inline cursor-pointer text-gray-400 text-4xl ${cur === 2 && "text-orange-400"}`} />
                <BsDot onClick={() => setCurState(3)} className={`inline cursor-pointer text-gray-400 text-4xl ${cur === 3 && "text-orange-400"}`} />
            </div>
        </>
    )
}

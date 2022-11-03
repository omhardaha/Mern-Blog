import React from 'react'

import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"
export default function Footer() {
    return (
        <div className='max-w-screen-xl my-10 lg:mx-auto mx-2 md:mx-8'>
            <h1 className='font-bold text-2xl md:text-3xl my-3 text-gray-700 tracking-wide'>Subscribe to Our Weekly newsletter</h1>

            <div className='md:grid md:grid-cols-12 gap-3 text-center'>
                <input className='p-2 rounded-lg border-slate-200 col-span-8  my-1 border-2 border-black' placeholder='Enter Your Email' type="text" name="" id="" />
                <button className='p-2 rounded-xl text-sm bg-orange-400 px-10 text-white col-span-4 ml-2'>SUBSCRIBE</button>
            </div>
            <div className='text-center text-gray-400 text-sm my-36'>
                <div>
                    <AiOutlineInstagram className="inline mr-4 text-3xl cursor-pointer" />
                    <AiOutlineTwitter className="inline mr-4 text-3xl cursor-pointer" />
                    <AiFillLinkedin className="inline mr-4 text-3xl cursor-pointer" />
                </div>
                <p className='my-6'>Copyright ©2022 All rights reserved | OM Hardaha</p>
                <p className='my-6 cursor-pointer'>Terms & Conditions / Privacy Policy</p>
            </div>

        </div>
    )
}

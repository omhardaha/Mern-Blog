import './Setting.css'
import Sidebar from '../Sidebar/Sidebar.jsx'
export default function Settings() {
    return (
        <>
            <div className='setting'>
                <div className="settingWrapper">
                    <div className="settingTitle">
                        <span className="settingUpdateTitle">
                            Update Your Account
                        </span>
                        <span className="settingUpdateTitle">
                            Delete Your Account
                        </span>
                    </div>
                    <form className="settingForm">
                        <label htmlFor="">Profile Picture</label>
                        <div className="settingPP">
                            <img src="https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <label htmlFor="fileInput" className="">
                                <i className="settingPPIcon fa-solid fa-circle-user"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}} />
                        </div>
                        <label htmlFor="profileName">UserName</label>
                        <input type="text" id='profileName' placeholder='omhardaha'/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='omdigital2016@gmail.com'/>

                        <label htmlFor="">UserName</label>
                        <input type="text" placeholder='safak'/>
                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    )
}

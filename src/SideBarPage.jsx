import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./SideBar.css"
import { SiApple } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
const SideBarPage = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/section");
  };
  return (
    <div className='body1'>
      <div style={{ display: "flex" }}>
        <aside className="sidebar-aside">
          <div className="sidebarIte">
            <i className="fa-solid fa-chart-simple"></i> HRdream
          </div>
          <div className="sidebarItemD">
            <h1>Plan includes</h1>
          </div>
          <div className="sidebarItemD">
            <input type="checkbox"/> Unlimited employee uploads
          </div>
          <div className="sidebarItemD">
            <input type="checkbox" />  Free forever
          </div>
          <div className="sidebarItemD">
            <input type="checkbox" /> Full author permissions
          </div>
          <div className="sidebarItemD">
            <input type="checkbox" />  Pro tips
          </div>
        </aside>

        <div className="side">
          <div className='logi'>
            <a href="/sign" className='login'>Don't have an account? <span className=''>Sign up.</span></a>
          </div>

          <div className='main1'>
            <h1>Sign in</h1>
            <form onSu>
              <h4 className=''>Sign in using your account with</h4>
              <div className='btns'>
                <button className='btn2'><FaGoogle /> Google</button>
                <button className='btn2'><SiApple /> Apple</button>
              </div>
              <h4 className=''>Or log in with your email address</h4>
              <div className=''>
                <input type="email" placeholder='Email address' className='inp1' />
              </div>
              <div className=''>
                <input type="password" placeholder='Password' className='inp1' />
              </div>
              <div className='inp1'>
                <button onClick={handleButton} className='btn1'>Sign in</button>
              </div>
              <p className='signp'>This site is protected by reCAPTCHA and the Google privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SideBarPage
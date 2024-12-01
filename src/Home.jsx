import { BsPeopleFill } from "react-icons/bs";import React,{useState} from 'react'
import { useNavigate, Link } from "react-router-dom"; 
import "./Home.css"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import myimg from "../public/myimg.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import { MdOutlineWavingHand } from "react-icons/md";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 
 
  const handleApplicant = () => {
    navigate("/applicant-tracker"); 
  };
  return (
    <div>
    <div className="asides">
    <div className='bg'>
    <aside className={`sidebars ${isOpen ? "show" : ""}`}>
      <img src alt="HRdream" className="sidebar-logo" />
      <nav className="sidebar-nav">
      
      <p> <RxDashboard className="p-icon" />Dashboard </p>
       <p onClick={handleApplicant}><TbMapSearch  className="p-icon"/> Applicant tracker</p>
         <p> <BsPeopleFill className="p-icon" /> People</p>
         <p><MdOutlineWavingHand className="p-icon" />Who's away</p>
          <p> <MdOutlineSettingsBackupRestore className="p-icon" />Reflect</p>
      </nav>
      </aside>
      
      <div className="sidebar-logout" >
      <h4> <CiSettings className="p-icon" style={{fontSize:'20px',}}/>Settings</h4>
      <h4>  <MdLogout className="p-icon" style={{fontSize:'15px', }} />Log Out</h4>
        </div>
         </div>
         </div>

         {/* Header Section */}
         <header className="header">
         <div className="search">
           <input
             type="text"
             placeholder="Search"
             className="searchInput"
              // Trigger search on input change
           />   
         </div>
         <div className='main9'> 
             <HiOutlineEnvelope className='iconss' />
             <IoMdNotificationsOutline className='iconss'/>
             <img src={myimg} alt="" srcset="" className='header-img' />
             <span>Admira Broom </span>
             <RiArrowDropDownLine className='icons3' style={{color:"black"}}  />
             </div>
       </header>
       </div>
  )
}

export default Home
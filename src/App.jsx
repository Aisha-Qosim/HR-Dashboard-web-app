import React, { useState ,} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SideBarPage from './SideBarPage';
import SignUp from './SignUp';
import Home from './Home';
import ApplicantTracker from './ApplicantTracker';
import Section from './Section';

function App() {
  const [count, setCount] = useState(0)
  return (
   <div> 
 <BrowserRouter>
                  <Routes>
                <Route path="/" element={<SideBarPage />} />
                <Route path="/sign" element={<SignUp />} />
                <Route  element={<Home />} />
                <Route path="/applicant-tracker" element={<ApplicantTracker/>} />
                <Route path="/section" element={<Section/>} />
               
                </Routes>
                </BrowserRouter>
   </div>
  )
}

export default App

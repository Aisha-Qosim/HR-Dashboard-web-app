import React from 'react'
import Home from './Home'
import "./Applicant.css"
import { FiMoreHorizontal } from 'react-icons/fi'
import { MdAdd, MdMacroOff,} from 'react-icons/md'
import { IoFilter } from 'react-icons/io5'

const ApplicantTracker = () => {
  return (
    <div>
    <Home/>
    <div>
    <section>
    <div className='title'>
        <h1>Application tracker</h1>
        <div className='titlediv'>
            <p>Here's your section process overview</p>
            <div className='filter'>
                <IoFilter style={{fontSize:'30px',  color: '#000'}}/>
                <p style={{marginTop:'0'}}>Filter</p>
            </div>
        </div>
    </div>
    <main>
        <div className='applied'>
            <h3>Applied</h3>
            <div className='applied-box'>
                <div className='ico'>
                    <div className='ico-head'>
                        <h4>Harper Stone</h4>
                        <a>haperstone@gmail.com</a>
                    </div>
                    <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                </div>
                <div className='applied-subsec'>
                    <div className='col-1'>
                        <MdMacroOff/>
                        <p>Copenhagen</p>
                    </div>
                    <div className='col-2'>
                        <MdMacroOff/>
                        <p>Head of HR</p>
                    </div>
                    <div className='col-5'>
                        <p>People & Culture</p>
                    </div>
                </div>
            </div>
            <div className='applied-box'>
                <div className='ico'>
                    <div className='ico-head'>
                        <h4>Alojz Novak</h4>
                        <a>alojznovak@gmail.com</a>
                    </div>
                    <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                </div>
                <div className='applied-subsec'>
                    <div className='col-1'>
                        <MdMacroOff/>
                        <p>Prague</p>
                    </div>
                    <div className='col-2'>
                        <MdMacroOff/>
                        <p>Engineering-Team</p>
                    </div>
                    <div className='col-4'>
                        
                        <p>IT</p>
                    </div>
                </div>
            </div>
            <div className='applied-box'>
                <div className='ico'>
                    <div className='ico-head'>
                        <h4>Jay Raver</h4>
                        <a>jayraver@gmail.com</a>
                    </div>
                    <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                </div>
                <div className='applied-subsec'>
                    <div className='col-1'>
                        <MdMacroOff/>
                        <p>Berlin</p>
                    </div>
                    <div className='col-2'>
                        <MdMacroOff/>
                        <p>Accountant</p>
                    </div>
                    <div className='col-3'>
                        <p>Finance</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div className='interviewed'>
            <h3>Interviewed</h3>
            <div className='inter-box'>
                <div className='ico'>
                    <div className='ico-head'>
                        <h4>Lucy Keyword</h4>
                        <a>lucykeyword@gmail.com</a>
                    </div>
                    <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                </div>
                <div className='inter-subsec'>
                    <div className='col-1'>
                        <MdMacroOff/>
                        <p>Copenhagen</p>
                    </div>
                    <div className='col-2'>
                        <MdMacroOff/>
                        <p>SEO Specialist</p>
                    </div>
                    <div className='col-3'>
                       
                        <p>Marketing</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div className='offer'>
            <h3>Made offer</h3>
            <div className='offer-box'>
                <div className='ico'>
                    <div className='ico-head'>
                        <h4>Millie Ligma</h4>
                        <a>millieligmak@gmail.com</a>
                    </div>
                    <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                </div>
                <div className='offer-subsec'>
                    <div className='col-1'>
                        <MdMacroOff/>
                        <p>Los Angeles</p>
                    </div>
                    <div className='col-2'>
                        <MdMacroOff/>
                        <p>Junoir Designer</p>
                    </div>
                    <div className='col-5'>
                        
                        <p>Design</p>
                    </div>
                </div>
            </div>
            <div className='offer-box'>
                <div className='ico'>
                    <div className='ico-head'>
                        <h4>Mike Star</h4>
                        <a>mikestar@gmail.com</a>
                    </div>
                    <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                </div>
                <div className='offer-subsec'>
                    <div className='col-1'>
                        <MdMacroOff/>
                        <p>Dublin</p>
                    </div>
                    <div className='col-2'>
                        <MdMacroOff/>
                        <p>Scrum Master</p>
                    </div>
                    <div className='col-4'>
                        <p>Management</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div className='hired'>
            <h3>Hired</h3>
            <div className='hire-box'>
                <div className='ico'>
                    <div className='ico-head'>
                        <h4>Victor Kowalski</h4>
                        <a>victorkowalski@gmail.com </a>
                    </div>
                    <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                </div>
                <div className='hire-subsec'>
                    <div className='col-1'>
                        <MdMacroOff/>
                        <p>Athenes</p>
                    </div>
                    <div className='col-2'>
                        <MdMacroOff/>
                        <p>Engineering- Backend</p>
                    </div>
                    <div className='col-4'>           
                        <p>IT</p>
                    </div>
                </div>
            </div>
        </div>
        <div/>
    </main>
    <div className='btn-container'>
        <div className='btn'>
            <a>
                <MdAdd/>
                add applicant
            </a>
        </div>
    </div>
    </section> 
    </div>
    </div>
  )
}

export default ApplicantTracker
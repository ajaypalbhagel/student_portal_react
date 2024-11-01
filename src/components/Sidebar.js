import React from 'react'
import { useState } from 'react';
import { MdOutlineHome } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import { IoMan } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import AddStudents from '../pages/Students/AddStudents';
import Dashboard from '../pages/Dashboard';

export default function Sidebar() { 

  const [dashboardBtn, setDashboardBtn] = useState(false)

  function handleDashboard(){
    setDashboardBtn(console.log('dashboard'))
  }
  function handleStudents(){
    setDashboardBtn(console.log('AddStudents'))
  }
  

  return (
    <>
    <div className='sidebar'>
      <h4 style={{paddingLeft: '60px'}}>MAIN MENU</h4>
     <div className='sidebar_btns'>
        <ul>
            <li>
                <button onClick={handleDashboard}>
                    <span className='sidebar_btns_icons_left'><MdOutlineHome /></span>
                     Dashboard
                    <span className='sidebar_btns_icons_right'><MdArrowRight /></span>
                </button>
            </li>
        </ul>
      </div>
      <div className='sidebar_btns'>
        <ul>
            <li>
                <button>
                    <span className='sidebar_btns_icons_left'><IoCalendarNumberOutline /></span>
                     Event Management
                    <span className='sidebar_btns_icons_right'><MdArrowRight /></span>
                </button>
            </li>
        </ul>
      </div>
      <div className='sidebar_btns'>
        <ul>
            <li>
                <button>
                    <span className='sidebar_btns_icons_left'><IoMan /></span>
                     Professors
                    <span className='sidebar_btns_icons_right'><MdArrowRight /></span>
                </button>
            </li>
        </ul>
        </div>
      <div className='sidebar_btns'>
        <ul>
            <li>
                <button onClick={handleStudents} >
                    <span className='sidebar_btns_icons_left'><FaPeopleCarry /></span>
                     Students
                    <span className='sidebar_btns_icons_right'><MdArrowRight /></span>
                </button>
            </li>
        </ul>
      </div>
      <div className='sidebar_btns'>
        <ul>
            <li>
                <button >
                    <span className='sidebar_btns_icons_left'><FaGraduationCap /></span>
                    courses
                    <span className='sidebar_btns_icons_right'><MdArrowRight /></span>
                </button>
            </li>
        </ul>
      </div>
    </div>
    </>
  )
}

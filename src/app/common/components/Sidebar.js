import { useState } from "react";
import { MdOutlineHome, MdArrowRight } from "react-icons/md";
import { IoCalendarNumberOutline, IoMan } from "react-icons/io5";
import { FaPeopleCarry, FaGraduationCap, FaLeaf } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";


export default function Sidebar() {
  const [showStudentsSubMenu, setShowStudentsSubMenu] = useState(false);
  const [showCoursesSubMenu, setShowCoursesSubMenu] = useState(false)
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleStudentsSubMenu = () => {
    setShowStudentsSubMenu(!showStudentsSubMenu);
  };

  const toggleCoursesSubMenu = () => {
    setShowCoursesSubMenu(!showCoursesSubMenu)
  }
  
  function handleDashboard(){
    window.location.href="./Dashboard"
  }
  function handleAddStudents(){
    window.location.href="./AddStudents"
  }
  function handleListStudents(){
     window.location.href="./ListStudents"
  }
  function handleUpdateStudents(){
    window.location.href="./UpdateStudents"
  }

  return (
    <div className="sidebar">
      <h4 style={{ paddingLeft: "60px" }}>MAIN MENU</h4>

      <div >
        <button className="sidebar_btn"  onClick={handleDashboard}>
          <span><MdOutlineHome /></span>
          Dashboard
          <span><MdArrowRight /></span>
        </button>
      </div>

      <div>
        <button className="sidebar_btn">
          <span><IoCalendarNumberOutline /></span>
          Event Management
          <span><MdArrowRight /></span>
        </button>
      </div>

      <div>
        <button className="sidebar_btn">
          <span><IoMan /></span>
          Professors
          <span><MdArrowRight /></span>
        </button>
      </div>

      <div>
        <button className="sidebar_btn" onClick={toggleStudentsSubMenu}>
          <span><FaPeopleCarry /></span>
          Students
          <span>{showStudentsSubMenu ? <MdArrowDropDown/>:<MdArrowRight/>} </span>
        </button>
        {showStudentsSubMenu && (
          <div className="sidebar_submenu">
            <button className="sidebar_btn" onClick={handleAddStudents }>- Add Student</button>
            <button className="sidebar_btn" onClick={handleListStudents}>- List Students</button>
            <button className="sidebar_btn" onClick={handleUpdateStudents}>- Update Students</button>
          </div>
        )}
      </div>

      <div>
        <button className="sidebar_btn" onClick={toggleCoursesSubMenu}>
          <span><FaGraduationCap /></span>
          Courses
          <span> {showCoursesSubMenu ? <MdArrowDropDown/>:<MdArrowRight/>}</span>
          </button>
        {showCoursesSubMenu && (
          <div className="sidebar_submenu">
            <button className="sidebar_btn"> - Course A</button>
            <button className="sidebar_btn"> - Course B</button>
            <button className="sidebar_btn"> - Course C</button>
          </div>
        )}
      </div>
    </div>
  );
}

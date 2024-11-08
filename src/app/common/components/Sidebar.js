import { MdOutlineHome } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import { IoMan } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

export default function Sidebar() {

  return (
    <>
      <div className="sidebar">
        <h4 style={{ paddingLeft: "60px"}}>MAIN MENU</h4>
        <div>
          <button className="sidebar_btn">
            <span>
              <MdOutlineHome />
            </span>
              Dashboard
            <span>
              <MdArrowRight />
            </span>
          </button>
        </div>
        <div>
          <button className="sidebar_btn">
            <span>
              <IoCalendarNumberOutline />
            </span>
              Event Management
            <span>
              <MdArrowRight />
            </span>
          </button>
        </div>
        <div>
          <button className="sidebar_btn">
            <span>
              <IoMan />
            </span>
              Professors
            <span>
              <MdArrowRight />
            </span>
          </button>
        </div>
        <div>
          <button className="sidebar_btn">
            <span>
              <FaPeopleCarry />
            </span>
             Students
            <span>
              <MdArrowRight />
            </span>
          </button>
        </div>
        <div>
          <button className="sidebar_btn">
            <span>
              <FaGraduationCap />
            </span>
              courses
            <span>
              <MdArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}


import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SubHeader() {
  return (
    <div style={{ display:'flex' , justifyContent:'space-between' ,backgroundColor: '#fff'}}>
        <div >
          <h3 style={{color: '#4c8df6ff'}}>Add Student</h3>
        </div>
        <div>           
                <span>Students</span>
                <MdKeyboardArrowRight size={24}/>
                <span style={{color: '#4c8df6ff'}}>Add Student
                </span>           
          </div>
        
    </div>
  )
}

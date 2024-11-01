import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SubHeader() {
  return (
    <div style={{backgroundColor: '#fff', margin: '10px', width: '150vh'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3 style={{color: '#4c8df6ff',padding: '10px'}}>Add Student</h3>
        <div>
        <h4 style={{padding: '10px'}}>
            <span>Students</span>
             <MdKeyboardArrowRight/>
            <span style={{color: '#4c8df6ff'}}>Add Student
            </span>
        </h4>
        </div>
        </div>
    </div>
  )
}

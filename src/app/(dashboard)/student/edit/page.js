import React from 'react'
import { AiOutlineRight } from "react-icons/ai";

export default function page() {
  return (
    <div>
    <div className=" bg-white p-4 max-w-full mx-1 my-2 flex justify-between">
      <div>
        <span className="text-blue-500 text-xl font-bold ">Student</span>
      </div>
      <div className="flex">
        <span className= "  flex text-gray-400">
          
          Student  <AiOutlineRight size={24}/></span>
        <span className="text-blue-500"> Edit</span>
      </div>
    </div>
    {/* Grey line separator */}
    {/* <hr className="border-gray-300 mb-4" /> */}

    <div className="bg-white p-4 max-w-full mx-1 my-2">
      
    </div>
  </div>
  )
}

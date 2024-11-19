import React, { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineAdd, MdEdit, MdDelete } from "react-icons/md";

const ListStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const students = [
    { profile: "https://i.pravatar.cc/150?img=2", rollNo: 15, education: "12th", mobile: "98765438", email: "jack@gmail.com", admissionDate: "26/11/2002" },
    { profile: "https://i.pravatar.cc/150?img=1", rollNo: 16, education: "12th", mobile: "98765439", email: "jane@gmail.com", admissionDate: "02/11/2003" },
    { profile: "https://i.pravatar.cc/150?img=3", rollNo: 17, education: "12th", mobile: "98765440", email: "mark@gmail.com", admissionDate: "15/03/2004" },
    { profile: "https://i.pravatar.cc/150?img=4", rollNo: 18, education: "12th", mobile: "98765441", email: "emily@gmail.com", admissionDate: "22/05/2005" },
    { profile: "https://i.pravatar.cc/150?img=5", rollNo: 19, education: "12th", mobile: "98765442", email: "alice@gmail.com", admissionDate: "05/06/2006" },
    { profile: "https://i.pravatar.cc/150?img=6", rollNo: 20, education: "12th", mobile: "98765443", email: "david@gmail.com", admissionDate: "12/07/2007" },
    { profile: "https://i.pravatar.cc/150?img=7", rollNo: 21, education: "12th", mobile: "98765444", email: "sophia@gmail.com", admissionDate: "25/08/2008" },
    { profile: "https://i.pravatar.cc/150?img=8", rollNo: 22, education: "12th", mobile: "98765445", email: "james@gmail.com", admissionDate: "30/09/2009" },
    { profile: "https://i.pravatar.cc/150?img=9", rollNo: 23, education: "12th", mobile: "98765446", email: "olivia@gmail.com", admissionDate: "11/10/2010" },
    { profile: "https://i.pravatar.cc/150?img=10", rollNo: 24, education: "12th", mobile: "98765447", email: "daniel@gmail.com", admissionDate: "18/11/2011" },
  ];

    const filteredStudents = students.filter(student => 
      Object.entries(student).some(([key, value]) =>
      key !== 'admissionDate' && key !== 'profile' && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    const handleAddNewStdButton = () => {
      window.location.href='./AddStudents'
    }

  return (
    <div className="flex flex-col">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          margin: "5px",
          padding: "10px",
        }}
      >
        <div>
          <h3 style={{ color: "#4c8df6ff", fontWeight: "50px" }}>All Student</h3>
        </div>
        <div className="flex">
          <span>Students</span>
          <MdKeyboardArrowRight size={24} />
          <span style={{ color: "#4c8df6ff" }}>All Student</span>
        </div>
      </div>
      <div className="bg-white mx-1 p-4">
        <div className="flex justify-between py-3">
          <h4 className="font-semibold text-blue-400">All Students List</h4>
          <button className="flex bg-blue-400 text-white p-1 rounded-sm hover:bg-slate-600" onClick={handleAddNewStdButton}>
            <MdOutlineAdd size={22} />
            <span>Add new</span>
          </button>
        </div>
        <hr />
        <div className="flex justify-between my-2">
          <div>
            <select className="border-2 rounded-md px-3 py-1">
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <span> entries per page</span>
          </div>
          <div>
            <span>Search:</span>
            <input
              className="border-2 rounded-md w-28 p-1"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search items"
            />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Profile</th>
              <th className="px-4 py-2 text-left">Roll No.</th>
              <th className="px-4 py-2 text-left">Education</th>
              <th className="px-4 py-2 text-left">Mobile</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Admission Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={student.profile} alt="profile" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="px-4 py-2">{student.rollNo}</td>
                <td className="px-4 py-2">{student.education}</td>
                <td className="px-4 py-2">{student.mobile}</td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.admissionDate}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-800">
                    <MdEdit size={20} onClick={handleAddNewStdButton}/>
                  </button>
                  <button className="text-red-500 hover:text-red-800">
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudents;

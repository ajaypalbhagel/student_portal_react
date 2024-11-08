"use client";
import React, { useState } from 'react';
import { studentsData } from '@/lib/data';
import { FaSortUp, FaSortDown, FaEdit, FaTrash } from 'react-icons/fa';

export default function Table() {
  const [sortOrder, setSortOrder] = useState({ column: null, direction: null });
  const [data, setData] = useState(studentsData);

  const handleSort = (column) => {
    const direction = sortOrder.direction === 'asc' ? 'desc' : 'asc';

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortOrder({ column, direction });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white">
          <thead>
            <tr className="bg-gray-100">
              {["ID", "Student ID", "Name", "Email", "Photo", "Phone", "Grade", "Class", "Address", "Actions"].map((header, index) => (
                <th
                  key={header}
                  className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b font-medium text-gray-700 text-left cursor-pointer"
                  onClick={() => (index !== 4 && index !== 9) && handleSort(header.toLowerCase())} // Exclude Photo & Actions from sorting
                >
                  <div className="flex items-center">
                    {header}
                    {/* Conditionally render sort icons */}
                    {sortOrder.column === header.toLowerCase() && sortOrder.direction === 'asc' && (
                      <FaSortUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-blue-500" />
                    )}
                    {sortOrder.column === header.toLowerCase() && sortOrder.direction === 'desc' && (
                      <FaSortDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-blue-500" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.id}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.studentId}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.name}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.email}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                </td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.phone}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.grade}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.class}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">{student.address}</td>
                <td className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 border-b text-gray-600">
                  <div className="flex space-x-1 sm:space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

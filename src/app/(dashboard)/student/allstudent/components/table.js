"use client";
import React from 'react';
import { studentsData } from '@/lib/data'; // Assuming you have some data to work with
import { FaSortUp, FaSortDown, FaEdit, FaTrash } from 'react-icons/fa';

export default function ResponsiveTable({ viewType }) {
  const [sortOrder, setSortOrder] = React.useState({ column: null, direction: null });
  const [data, setData] = React.useState(studentsData);

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
    <div className="mx-auto p-4">
      {/* Table Layout for larger screens */}
      {viewType === 'list' && (
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead>
              <tr className="bg-gray-100">
                {["ID", "Student ID", "Name", "Email", "Photo", "Phone", "Grade", "Class", "Address", "Actions"].map((header, index) => (
                  <th
                    key={header}
                    className="px-4 py-2 border-b font-bold text-gray-700 text-left cursor-pointer"
                    onClick={() => (index !== 4 && index !== 9) && handleSort(header.toLowerCase())}
                  >
                    <div className="flex items-center">
                      {header}
                      {sortOrder.column === header.toLowerCase() && sortOrder.direction === 'asc' && (
                        <FaSortUp className="ml-1 text-blue-500" />
                      )}
                      {sortOrder.column === header.toLowerCase() && sortOrder.direction === 'desc' && (
                        <FaSortDown className="ml-1 text-blue-500" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b text-gray-600">{student.id}</td>
                  <td className="px-4 py-2 border-b text-gray-600">{student.studentId}</td>
                  <td className="px-4 py-2 border-b text-gray-600">{student.name}</td>
                  <td className="px-4 py-2 border-b text-gray-600">{student.email}</td>
                  <td className="px-4 py-2 border-b">
                    <img src={student.photo} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                  </td>
                  <td className="px-4 py-2 border-b text-gray-600">{student.phone}</td>
                  <td className="px-4 py-2 border-b text-gray-600">{student.grade}</td>
                  <td className="px-4 py-2 border-b text-gray-600">{student.class}</td>
                  <td className="px-4 py-2 border-b text-gray-600">{student.address}</td>
                  <td className="px-4 py-2 border-b text-gray-600">
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit className="w-5 h-5" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Card Layout for smaller screens or grid view */}
      {viewType === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((student) => (
            <div key={student.id} className="border rounded-lg p-4 shadow-sm hover:shadow-lg bg-white">
              <img src={student.photo} alt={student.name} className="w-20 h-20 rounded-full object-cover mx-auto" />
              <h3 className="text-center text-xl font-semibold mt-2">{student.name}</h3>
              <p className="text-center text-gray-600">{student.email}</p>

              {/* Additional student details */}
              <div className="mt-3">
                <p className="text-sm text-gray-600">ID: {student.studentId}</p>
                <p className="text-sm text-gray-600">Phone: {student.phone}</p>
                <p className="text-sm text-gray-600">Grade: {student.grade}</p>
                <p className="text-sm text-gray-600">Class: {student.class}</p>
                <p className="text-sm text-gray-600">Address: {student.address}</p>
              </div>

              {/* Action buttons */}
              <div className="flex justify-between mt-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

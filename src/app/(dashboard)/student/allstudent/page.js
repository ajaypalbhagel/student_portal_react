"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import ViewType from "./components/viewtype";
import ResponsiveTable from "./components/table"; // Import the responsive table

export default function Page() {
  const [viewType, setViewType] = useState('list'); // Default to list view
  const [isMobile, setIsMobile] = useState(false); // To track screen size

  // Check if the screen size is smaller than a certain width (e.g., 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update the state if the screen is smaller than 768px
    };

    // Initial check
    handleResize();

    // Add event listener on resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mx-auto px-4">
      <div className="bg-white p-4 max-w-full mx-1 my-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <span className="text-blue-500 text-xl font-bold">All Students</span>
        </div>
        <div className="flex items-center mt-2 sm:mt-0 text-sm sm:text-base">
          <span className="flex text-gray-400">
            Student <AiOutlineRight size={20} className="mx-1" />
          </span>
          <span className="text-blue-500">All Students</span>
        </div>
      </div>

      {/* ViewType Component: Pass viewType and setViewType */}
      <ViewType viewType={viewType} setViewType={setViewType} />

      <div className="bg-white p-4 max-w-full mx-1 my-2 rounded-md shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <h3 className="text-lg font-semibold">All Student List</h3>

          <button
            className="flex items-center space-x-2 w-full sm:w-auto py-2 px-4 border rounded bg-blue-500 text-white border-blue-700"
          >
            <GoPlus size={20} />
            <span>Add New</span>
          </button>
        </div>

        <hr className="my-2" />
        <div className="flex justify-between">
          {/* right side  */}
          <div className="mt-4">
            <select
              name="studentClass"
              className={`w-30 px-5 py-3 rounded-md border-2   `}
            >
              <option value="">10 </option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <span > entries per page</span>
          </div>

          {/* left side  */}
          <div className="mt-4">
            <span> Search : </span>
            <input
                      type="text"                 
                      className={` w-30  px-5 py-3  rounded-md   border-2`}
            />

          </div>
        </div>

        {/* This section determines which view (table or cards) should be shown */}
        <div className="mt-4">
          {/* If it's a mobile screen or grid view is active, show the cards */}
          {(isMobile || viewType === 'grid') ? (
            <ResponsiveTable viewType="grid" />
          ) : (
            <ResponsiveTable viewType="list" />
          )}
        </div>
      </div>
    </div>
  );
}

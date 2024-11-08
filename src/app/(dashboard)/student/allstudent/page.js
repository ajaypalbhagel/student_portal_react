import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

import ViewType from "./components/viewtype";
import Table from "./components/table";

export default function Page() {
  return (
    <div>
      <div className=" bg-white p-4 max-w-full mx-1 my-2 flex justify-between">
        <div>
          <span className="text-blue-500 text-xl font-bold ">All Student</span>
        </div>
        <div className="flex">
          <span className="  flex text-gray-400">
            Student <AiOutlineRight size={24} />
          </span>
          <span className="text-blue-500"> All Student</span>
        </div>
      </div>
      {/* Grey line separator */}
      {/* <hr className="border-gray-300 mb-4" /> */}

      <ViewType />

      <div className="bg-white p-4 max-w-full mx-1 my-2">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-4 sm:space-y-0">
          <h3 className="text-lg font-semibold">All Student List</h3>

          <button
            className={` flex w-fit py-2 px-4 border rounded bg-blue-500 text-white border-blue-700`}
          >
            {" "}
            <GoPlus size={22} />
            Add New
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

        <div className="mt-4">
          <Table />
        </div>
      </div>
    </div>
  );
}

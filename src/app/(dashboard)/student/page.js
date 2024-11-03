"use client";
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import * as FcIcons from 'react-icons/fc';
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

export default function page() {
  // Using a single state object for all fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    registrationDate: "",
    rollNo: "",
    studentClass: "",
    gender: "",
    mobileNumber: "",
    parentName: "",
    parentMobileNumber: "",
    dob: "",
    bloodGroup: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  // Handle change for each input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate all fields
  const validateAllFields = () => {
    let validationErrors = {};

    // Define custom error messages for each field
    const errorMessages = {
      firstName: "Please enter a first name",
      lastName: "Please enter a last name",
      email: "Please enter an email",
      registrationDate: "Please select a registration date",
      rollNo: "Please enter a roll number",
      studentClass: "Please enter a class",
      gender: "Please select a gender",
      mobileNumber: "Please enter a mobile number",
      parentName: "Please enter a parent name",
      parentMobileNumber: "Please enter a parent mobile number",
      dob: "Please enter a date of birth",
      bloodGroup: "Please enter a blood group",
      address: "Please enter an address",
    };

    // Loop over formData to check for empty fields
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        validationErrors[field] = errorMessages[field];
      }
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = () => {
    if (validateAllFields()) {
      console.log("Form is valid! Submitting data:", formData);
      // Process the form submission
    } else {
      console.log("Form is invalid. Please fill in all required fields.");
    }
  };

  return (
    <div>
      <div className=" bg-white p-4 max-w-full mx-1 my-2 flex justify-between">
        <div>
          <span className="text-blue-500 text-xl font-bold ">Add Student</span>
        </div>
        <div className="flex">
          <span className= "  flex text-gray-400">
            
            students  <AiOutlineRight size={24}/></span>
          <span className="text-blue-500"> Add student</span>
        </div>
      </div>
      {/* Grey line separator */}
      {/* <hr className="border-gray-300 mb-4" /> */}

      <div className="bg-white p-4 max-w-full mx-1 my-2">
        <div>
          <h3 className="text-lg font-semibold">Basic Info</h3>
          <hr className="my-2" />

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* first name  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">First Name</label>
                <div
                  className="flex items-center border rounded-md px-2 py-1"
                  style={{ borderColor: errors.firstName ? "red" : "#ccc" }}
                >
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className={` w-full  px-2 py-1  rounded-md `}
                  />
                  {errors.firstName && (
                    <AiOutlineInfoCircle className="text-red-500 ml-2" />
                  )}
                </div>
                {errors.firstName && (
                  <span className="text-red-500">{errors.firstName}</span>
                )}
              </div>
              {/* last name  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <span className="text-red-500">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* email  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              {/* registration date  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Registration Date</label>
                <input
                  type="date"
                  name="registrationDate"
                  value={formData.registrationDate}
                  onChange={handleChange}
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.registrationDate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.registrationDate && (
                  <span className="text-red-500">
                    {errors.registrationDate}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* roll number  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Roll No.</label>
                <input
                  type="number"
                  placeholder="Roll No"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.rollNo ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.rollNo && (
                  <span className="text-red-500">{errors.rollNo}</span>
                )}
              </div>
              {/* student class  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Class</label>
                <select
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  className={`w-full px-2 py-1 border ${
                    errors.studentClass ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                >
                  <option value="">Select Class</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                {errors.studentClass && (
                  <span className="text-red-500">{errors.studentClass}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* gender  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full px-2 py-1 border ${
                    errors.gender ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                >
                  <option value="male">Select Option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-red-500">{errors.gender}</span>
                )}
              </div>
              {/* mobile  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Mobile Number</label>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.mobileNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500">{errors.mobileNumber}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* parent name  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Parent Name</label>
                <input
                  type="text"
                  placeholder="Parent Name"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.parentName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.parentName && (
                  <span className="text-red-500">{errors.parentName}</span>
                )}
              </div>
              {/* parent mobile number  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Parent Mobile Number</label>
                <input
                  type="number"
                  name="parentMobileNumber"
                  value={formData.parentMobileNumber}
                  onChange={handleChange}
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.parentMobileNumber
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.parentMobileNumber && (
                  <span className="text-red-500">
                    {errors.parentMobileNumber}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* date of birth  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={` w-full  px-2 py-1  rounded-md border ${
                    errors.dob ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.dob && (
                  <span className="text-red-500">{errors.dob}</span>
                )}
              </div>

              {/* blood group  */}
              <div className="w-full md:w-1/2">
                <label className="block mb-1">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className={`w-full px-2 py-1 border ${
                    errors.bloodGroup ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                {errors.bloodGroup && (
                  <span className="text-red-500">{errors.bloodGroup}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full h-24 px-2 py-1 border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                placeholder="Address"
              />
              {errors.address && (
                <span className="text-red-500">{errors.address}</span>
              )}
            </div>

            <div className="border border-gray-300 w-full sm:w-1/2 p-1 rounded-md flex items-center gap-2">
              <button className="bg-gray-100 py-1 px-2 rounded-md">
                Choose file
              </button>
              <span>No file chosen</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-1 rounded-md"
              >
                Submit
              </button>
              <button className="bg-green-400 text-green-900 px-4 py-1 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

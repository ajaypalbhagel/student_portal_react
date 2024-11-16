"use client";
import React, { useState } from 'react';
import './students.css'
import { MdKeyboardArrowRight } from "react-icons/md";

export default function AddStudents() {

  const [firstName, setFirstName] = useState('') 
  const [firstNameEmpty,setFirstNameEmpty] = useState(true)
  const [lastName, setLastName] = useState('') 
  const [lastNameEmpty,setLastNameEmpty] = useState(true)
  const [email, setEmail] = useState('')
  const [emailEmpty,setEmailEmpty] = useState(true)
  const [registerDate, setRegisterDate] = useState('')
  const [registerDateEmpty, setRegisterDateEmpty] = useState(true)
  const [className, setClassName] = useState('')
  const [classNameEmpty, setClassNameEmpty] = useState(true)
  const [sectionField, setSectionField] = useState('')
  const [sectionEmpty, setSectionEmpty] = useState(true)
  const [gender, setGender] = useState('')
  const [genderEmpty, setGenderEmpty] = useState(true)
  const [parentName, setParentName] = useState('')
  const [parentNameEmpty, setParentNameEmpty] = useState(true)
  const [mobileNumber, setMobileNumber] = useState('')
  const [mobileNumberEmpty, setMobileNumberEmpty] = useState(true)
  const [parentMobileNumber, setParentMobileNumber] = useState('')
  const [parentMobileNumberEmpty, setParentMobileNumberEmpty] = useState(true)
  const [birthDate, setBirthDate] = useState('')
  const [birthDateEmpty, setBirthDateEmpty] = useState(true)
  const [bloodGroup, setBloodGroup] = useState('')
  const [bloodGroupEmpty, setBloodGroupEmpty] = useState(true)
  const [address, setAddress] = useState('')
  const [addressEmpty, setAddressEmpty] = useState(true)


  
  function valiation(e){
    e.preventDefault();
    if(firstName === '' || !validateName(firstName)){
      setFirstNameEmpty(false);
    }else{
      setFirstNameEmpty(true);
    }
    if(lastName === '' || !validateName(lastName)){
      setLastNameEmpty(false);
    }else{
      setLastNameEmpty(true)
    }
    if(email === ''){
      setEmailEmpty(false);
    }
    else{
      setEmailEmpty(true)
    }
    if(registerDate === ''){
      setRegisterDateEmpty(false);
    }else{
      setRegisterDateEmpty(true)
    }
    if(className === ''){
      setClassNameEmpty(false)
    }else{
      setClassNameEmpty(true)
    }
    if(sectionField === ''){
      setSectionEmpty(false)
    }else{
      setSectionEmpty(true)
    }
    if(gender === ''){
      setGenderEmpty(false)
    }else{
      setGenderEmpty(true)
    }
    if(parentName === ''){
      setParentNameEmpty(false)
    }else{
      setParentNameEmpty(true)
    }
    if(mobileNumber === ''){
      setMobileNumberEmpty(false)
    }else{
      setMobileNumberEmpty(true)
    }
    if(parentMobileNumber === ''){
      setParentMobileNumberEmpty(false)
    }else{
      setParentMobileNumberEmpty(true)
    }
    if(birthDate === ''){
      setBirthDateEmpty(false)
    }else{
      setBirthDateEmpty(true)
    }
    if(bloodGroup === ''){
      setBloodGroupEmpty(false)
    }else{
      setBloodGroupEmpty(true)
    }
    if(address === ''){
      setAddressEmpty(false)
    }else{
      setAddressEmpty(true)
    }

    if(email && !validateEmail(email)){
      setEmailEmpty(false)
    }
  }

  function validateName(name){
    const regex = /^[a-zA-Z'-]{2,30}$/;
    return regex.test(name)
  }

  function validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
  }

  return (
    <>
        <div style={{display:'flex', justifyContent:'space-between' ,backgroundColor: '#fff', margin: '5px', padding: '10px'}}>
        <div >
          <h3 style={{color: '#4c8df6ff'}}>Add Student</h3>
        </div>
        <div className='flex'>           
                <span>Students</span>
                <MdKeyboardArrowRight size={24}/>
                <span style={{color: '#4c8df6ff'}}>Add Student
                </span>           
          </div>
      </div>
    <form style={{display: 'flex', flexDirection:'column', backgroundColor: '#fff', padding: '10px',  margin: '5px' }}>
      <h3>Basic Info</h3>
      <hr />
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        
        <div style={{ display: 'flex',flexWrap: 'wrap', gap: '20px'}}>
          <div style={{flex: 1}}>
            <label style={{ display: 'block', marginBottom: '5px' }}>First Name<span style={{color: 'red'}}>*</span></label>
            <input type="text"   value={firstName}   onChange={(e) => setFirstName(e.target.value.trim())}  placeholder="Enter First Name" 
              style={{ width: '100%',padding: '5px', border: `${ firstNameEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
            />
            <span style={{color: 'red', fontSize: '15px'}}>{firstNameEmpty ? "" : "please enter First name."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Last Name<span style={{color: 'red'}}>*</span></label>
            <input type="text" value={lastName}   onChange={(e) => setLastName(e.target.value.trim())} placeholder="Enter First Name" 
              style={{ width: '100%', padding: '5px',border: `${ lastNameEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
            />
            <span style={{color: 'red', fontSize: '15px'}}>{lastNameEmpty ? "" : "please enter last name."}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email<span style={{color: 'red'}}>*</span></label>
            <input  type="email" value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" 
              style={{ width: '100%', padding: '5px',border: `${ emailEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
            />
            <span style={{color: 'red', fontSize: '15px'}}>{emailEmpty ? "" : "please enter email."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px'}}>Registration Date<span style={{color: 'red'}}>*</span></label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <input type="date" value={registerDate}   onChange={(e) => setRegisterDate(e.target.value)}  placeholder="Enter Date" 
                style={{ width: '100%', padding: '5px',border: `${ registerDateEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
              />
            </div>
            <span style={{color: 'red', fontSize: '15px'}}>{registerDateEmpty ? "" : "please enter registration date."}</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Class<span style={{color: 'red'}}>*</span></label>
            <select  type="number"  value={className}   onChange={(e) => setClassName(e.target.value)} placeholder="Enter Class" maxLength='10' 
              style={{ width: '100%', padding: '5px',border: `${classNameEmpty ?'1px solid #ccc' : '1px solid red'}`,  borderRadius: '4px' }}>
            <option value="select option">Select options</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
             <span style={{color: 'red', fontSize: '15px'}}>{classNameEmpty ? "" : "please enter Class."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{display: 'block', marginBottom: '5px'}}>Section<span style={{color: 'red'}}>*</span> </label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px'}}>
              <select type="number" value={sectionField} onChange={(e) => setSectionField(e.target.value)} 
                style={{  width: '100%', padding: '5px', border:`${sectionEmpty ?'1px solid #ccc' :'1px solid red' }`, borderRadius: '4px'}}>
                <option value="">Select options</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <span style={{color: 'red', fontSize: '15px'}}>{sectionEmpty ? '' : "please enter section."}</span>
          </div>
        </div>
       
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Gender </label>
            <select  type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" 
              style={{  width: '100%', padding: '5px', border:`${genderEmpty ?'1px solid #ccc' :'1px solid red' }`,  borderRadius: '4px' }}>
                <option value="select options">Select Options</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
          <span style={{color: 'red', fontSize: '15px'}}>{genderEmpty ? '' : "please enter Gender."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number </label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" maxLength="10"
                style={{  width: '100%', padding: '5px',border: `${mobileNumberEmpty ? '1px solid #ccc' : '1px solid red'}`,  borderRadius: '4px 0 0 4px'}}
                
              />
            </div>
              <span style={{color: 'red', fontSize: '15px'}}>{mobileNumberEmpty ? "" : "please enter mobile number."}</span>
          </div>
        </div>
       
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Parent Name </label>
            <input  type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="Parent Name" 
              style={{  width: '100%', padding: '5px', border:`${parentNameEmpty ?'1px solid #ccc' :'1px solid red' }`, borderRadius: '4px' }}
            />
            <span style={{color: 'red', fontSize: '15px'}}>{parentNameEmpty ? '' : "please enter Parent Name."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Parent Mobile Number</label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <input type="number" pattern="[0-9]" value={parentMobileNumber} onChange={(e) => setParentMobileNumber(e.target.value)} placeholder="Parent Mobile Number" maxLength="10"
                style={{  width: '100%', padding: '5px', border:`${parentMobileNumberEmpty ? '1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
              />
            </div>
            <span style={{color: 'red', fontSize: '15px'}}>{parentMobileNumberEmpty ? '' : "please enter Parent Mobile Number."}</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth</label>
            <input  type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} min="1980-01-01" max= "2020-01-01"
              style={{  width: '100%',padding: '5px', border:`${birthDateEmpty ? '1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
            />
          <span style={{color: 'red', fontSize: '15px'}}>{birthDateEmpty ? '' : "please enter birth Date."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Blood group</label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <select type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}
                style={{ width: '100%', padding: '6px',border:`${bloodGroupEmpty ? '1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}>
                <option>Select options</option>
                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
                <option>O+</option>
                <option>O</option>
                <option>AB</option>
                <option>AB+</option>
              </select>
            </div>
            <span style={{color: 'red', fontSize: '15px'}}>{bloodGroupEmpty ? '' : "please enter blood group."}</span>
          </div>
        </div>
        <div>
          <label>Address </label>
          <div>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: '100%',height: '10vh', padding: '5px', border:`${addressEmpty ? '1px solid #ccc' : '1px solid red'}`}} placeholder='Address'/>
          </div>
          <span style={{color: 'red', fontSize: '15px'}}>{addressEmpty ? '' : "please enter address."}</span>
        </div>
        <div style={{border: '1px solid #ccc',  borderRadius: '2px'}}>
          <button style={{border: 'transparent', height: '30px', padding: '5px'}}>Choose file</button>
          <button  style={{border: 'transparent',background: 'none', paddingLeft: '5px'}}>No file choosen</button>
        </div>
        <div>
        <div>
          <button onClick={(e) => valiation(e)}  style={{backgroundColor: '#4c8df6ff', color: '#fff', border: 'transparent',margin: '2px', height: '30px', borderRadius: '2px',width: '60px'}}>Submit</button>
          <button style={{backgroundColor: '#6dd58cff', color: '#0f5223ff', border: 'transparent',  height: '30px', borderRadius: '2px',width: '60px'}}>Cancel</button>
          <span style={{ color: 'green', padding: '10px' }}></span>
        </div>
        </div>
      </div>
    </form>
    </>
  );
}

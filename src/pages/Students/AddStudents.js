"use client";
import React, { useState } from 'react';

export default function AddStudents() {

  const [firstName, setFirstName] = useState('') 
  const [firstNameEmpty,setFirstNameEmpty] = useState(true)
  const [lastName, setLastName] = useState('') 
  const [lastNameEmpty,setLastNameEmpty] = useState(true)
  const [email, setEmail] = useState('')
  const [emailEmpty,setEmailEmpty] = useState(true)
  const [registerDate, setRegisterDate] = useState('')
  const [registerDateEmpty, setRegisterDateEmpty] = useState(true)
  const [rollNo, setRollNo] = useState('')
  const [rollNoEmpty, setRollNoEmpty] = useState(true)
  const [className, setClassName] = useState('')
  const [classNameEmpty, setClassNameEmpty] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false);

  function valiation(){
    if(firstName ==''){
      setFirstNameEmpty(false);
    }
    if(lastName == ''){
      setLastNameEmpty(false);
    }
    if(email == ''){
      setEmailEmpty(false);
    }
    if(registerDate == ''){
      setRegisterDateEmpty(false);
    }
    if(rollNo == ''){
      setRollNoEmpty(false)
    }
    if(className == ''){
      setClassNameEmpty(false)
    }
    else{
      setFirstNameEmpty(true);
      setLastNameEmpty(true);
      setEmailEmpty(true);
      setRegisterDateEmpty(true)
      setRollNoEmpty(true)
      setClassNameEmpty(true)
    }
    if (email !== '') {
      setFormSubmitted(true); 
    } else {
      setFormSubmitted(false); 
    }
  }

  return (
    <form style={{display: 'grid', backgroundColor: '#fff', padding: '10px', maxWidth: '100%', margin: '5px' }}>
      <h3>Basic Info</h3>
      <hr />
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        
        <div style={{ display: 'flex',flexWrap: 'wrap', gap: '20px' }}>
          <div style={{flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>First Name<span style={{color: 'red'}}>*</span></label>
            <input type="text"  value={firstName}   onChange={(e) => setFirstName(e.target.value)}  placeholder="Enter First Name" 
              style={{ width: '70vh', padding: '5px', border: `${ firstNameEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
            />
            <span style={{color: 'red', fontSize: '15px'}}>{firstNameEmpty ? "" : "please enter First name."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Last Name<span style={{color: 'red'}}>*</span></label>
            <input type="text" value={lastName}   onChange={(e) => setLastName(e.target.value)} placeholder="Enter First Name" 
              style={{ width: '73vh', padding: '5px',border: `${ lastNameEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
            />
            <span style={{color: 'red', fontSize: '15px'}}>{lastNameEmpty ? "" : "please enter last name."}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email<span style={{color: 'red'}}>*</span></label>
            <input  type="email" value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" 
              style={{width: '70vh', padding: '5px',border: `${ emailEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
            />
            <span style={{color: 'red', fontSize: '15px'}}>{emailEmpty ? "" : "please enter email."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px'}}>Registration Date<span style={{color: 'red'}}>*</span></label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <input type="date" value={registerDate}   onChange={(e) => setRegisterDate(e.target.value)}  placeholder="Enter Date" 
                style={{width: '73vh', padding: '5px',border: `${ registerDateEmpty ?'1px solid #ccc' : '1px solid red'}`, borderRadius: '4px' }}
              />
            </div>
            <span style={{color: 'red', fontSize: '15px'}}>{registerDateEmpty ? "" : "please enter registration date."}</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Roll No.<span style={{color: 'red'}}>*</span></label>
            <input  type="text"  value={rollNo}   onChange={(e) => setRollNo(e.target.value)} placeholder="Roll No"  
              style={{width: '70vh', padding: '5px',border: `${rollNoEmpty ?'1px solid #ccc' : '1px solid red'}`,  borderRadius: '4px' }}
            />
             <span style={{color: 'red', fontSize: '15px'}}>{rollNoEmpty ? "" : "please enter Roll No."}</span>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{display: 'block', marginBottom: '5px'}}>Class<span style={{color: 'red'}}>*</span> </label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px'}}>
              <select type="number" value={className} onChange={(e) => setClassName(e.target.value)} 
                style={{width: '73vh', padding: '5px', border:`${classNameEmpty ?'1px solid #ccc' :'1px solid red' }`, borderRadius: '4px'}}>
                <option value="">Select options</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <span style={{color: 'red', fontSize: '15px'}}>{classNameEmpty ? '' : "please enter class."}</span>
          </div>
        </div>
       
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Gender </label>
            <select  type="text" placeholder="Gender" 
              style={{width: '70vh', padding: '5px', border:'1px solid #ccc',  borderRadius: '4px' }}>
                <option value="male">Select Options</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number </label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <input type="tel"  placeholder="Mobile Number" maxlength="10"
                style={{width: '73vh', padding: '5px',border:'1px solid #ccc',  borderRadius: '4px 0 0 4px' }}
              />
            </div>
          </div>
        </div>
       
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Parent Name </label>
            <input  type="text" placeholder="Parent Name" 
              style={{width: '70vh', padding: '5px', border:'1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'inline', marginBottom: '5px' }}>Parent Mobile Number</label>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <input type="tel"  placeholder="Parent Mobile Number" maxlength="10"
                style={{width: '73vh', padding: '5px', border:'1px solid #ccc', borderRadius: '4px 0 0 4px' }}
              />
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth</label>
            <input  type="date" placeholder="Enter Email" min="2019-01-01"
              style={{width: '70vh', padding: '5px', border:'1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'inline', marginBottom: '5px' }}>Blood group</label>
            <iv style={{ display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
              <select type="text"
                style={{width: '73vh', padding: '5px',border:'1px solid #ccc', borderRadius: '4px' }}>
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
            </iv>
          </div>
        </div>
        <div>
          <label>Address </label>
          <div>
            <textarea style={{width: '150vh', height: '10vh', padding: '5px'}} placeholder='Address'/>
            </div>
        </div>
        <div style={{border: '1px solid #ccc', width: '50vh', borderRadius: '2px'}}>
          <button style={{border: 'transparent', height: '30px', padding: '5px'}}>Choose file</button>
          <button  style={{border: 'transparent',background: 'none', paddingLeft: '5px'}}>No file choosen</button>
        </div>
        <div>
        <div>
          <button onClick={valiation}  style={{backgroundColor: '#4c8df6ff', color: '#fff', border: 'transparent',margin: '2px', width: '70px', height: '30px', borderRadius: '2px'}}>Submit</button>
          <button style={{backgroundColor: '#6dd58cff', color: '#0f5223ff', border: 'transparent', width: '70px', height: '30px', borderRadius: '2px'}}>Cancel</button>
          <span style={{ color: 'green', padding: '10px' }}>{formSubmitted ? 'Form submitted successfully!' : ''}</span>
        </div>
        </div>

      </div>
    </form>
  );
}

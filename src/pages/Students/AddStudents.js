import React, { useState } from 'react';
import { MdOutlineDateRange } from "react-icons/md";

export default function AddStudents() {

  const [name, setName] = useState('')

  function handleFirstName(e){
    const value = e.target.value;
    setName(value);
  }

  return (
    <div style={{ backgroundColor: '#fff', padding: '10px', maxWidth: '100%', margin: '5px' }}>
      <h3>Basic Info</h3>
      <hr />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
            <input type="text" value={name} placeholder="Enter First Name" 
              style={{ width: '70vh', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
            <input type="text" placeholder="Enter First Name" 
              style={{ width: '73vh', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </div>

        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input  type="text" placeholder="Enter Email" 
              style={{width: '70vh', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Registration Date</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px' }}>
              <input type="text"  placeholder="Enter Date" 
                style={{width: '70vh', padding: '5px', border: 'none', borderRadius: '4px 0 0 4px' }}
              />
              <MdOutlineDateRange style={{ padding: '8px', color: '#666' }} />
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Roll No.</label>
            <input  type="text" placeholder="Roll No" 
              style={{width: '70vh', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Class</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px' }}>
              <input type="text"  placeholder="Class" 
                style={{width: '70vh', padding: '5px', border: 'none', borderRadius: '4px 0 0 4px' }}
              />
              <MdOutlineDateRange style={{ padding: '8px', color: '#666' }} />
            </div>
          </div>
        </div>
       
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Gender</label>
            <input  type="text" placeholder="Gender" 
              style={{width: '70vh', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px' }}>
              <input type="text"  placeholder="Mobile Number" 
                style={{width: '70vh', padding: '5px', border: 'none', borderRadius: '4px 0 0 4px' }}
              />
              <MdOutlineDateRange style={{ padding: '8px', color: '#666' }} />
            </div>
          </div>
        </div>
       
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Parent Name</label>
            <input  type="text" placeholder="Parent Name" 
              style={{width: '70vh', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Parent Mobile Number</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px' }}>
              <input type="text"  placeholder="Parent Mobile Number" 
                style={{width: '70vh', padding: '5px', border: 'none', borderRadius: '4px 0 0 4px' }}
              />
              <MdOutlineDateRange style={{ padding: '8px', color: '#666' }} />
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth</label>
            <input  type="text" placeholder="Enter Email" 
              style={{width: '70vh', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Blood group</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px' }}>
              <input type="text"  placeholder="Blood group" 
                style={{width: '70vh', padding: '5px', border: 'none', borderRadius: '4px 0 0 4px' }}
              />
              <MdOutlineDateRange style={{ padding: '8px', color: '#666' }} />
            </div>
          </div>
        </div>
        <div>
          <label>Address</label>
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
          <button style={{backgroundColor: '#4c8df6ff', color: '#fff', border: 'transparent',margin: '2px', width: '70px', height: '30px', borderRadius: '2px'}}>Submit</button>
          <button style={{backgroundColor: '#6dd58cff', color: '#0f5223ff', border: 'transparent', width: '70px', height: '30px', borderRadius: '2px'}}>Cancel</button>
        </div>
        </div>

      </div>
    </div>
  );
}

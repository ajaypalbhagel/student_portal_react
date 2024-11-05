import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddStudents from './pages/Students/AddStudents';
import SubHeader from './components/SubHeader';
import EventManagement from './pages/EventManagement';
import Professors from './pages/Professors'
import Courses from './pages/Courses'


function App() {
  return (
    <BrowserRouter>
    <Header/>
     <div style={{display: 'flex'}}>
        <div className='sidebarwrapper'>
          <Sidebar/>
        </div>
        <div className='content_area'>
        <SubHeader/>
        <Routes>
        <Route path= "/" exact={true} element={<Dashboard/>}/>
        <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
        <Route path="/EventManagement" exact={true} element={<EventManagement/>}/>
        <Route path="/Professors" exact={true} element={<Professors/>}/>
        <Route path="/AddStudents" exact={true} element={<AddStudents/>}/>
        <Route path="/courses" exact={true} element={<Courses/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

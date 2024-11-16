import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./app/common/components/Header";
import Sidebar from "./app/common/components/Sidebar";
import AddStudents from "./app/admin/components/manage-students/AddStudents";
import ListStudents from "./app/admin/components/manage-students/ListStudents";
import UpdateStudents from "./app/admin/components/manage-students/UpdateStudents"

function App() {
  return (
    <BrowserRouter>
      {/* header  */}
      <div className="header">
        <Header />
      </div>
      {/* sidebar  and main-container  */}
      <div className="main-sidebar">
        <div>
          <Sidebar />
        </div>
        {/* main-content */}
        <div className="main">
          <Routes>
            <Route path="/admin/AddStudents" exact={true} element={<AddStudents/>} />
            <Route path="/admin/ListStudents" exact={true} element={<ListStudents/>} />
            <Route path="/admin/UpdateStudents" exact={true} element={<UpdateStudents/>} />
          </Routes>          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

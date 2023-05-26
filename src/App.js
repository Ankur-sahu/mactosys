import './assets/css/App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layouts/Navbar';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Dashboard from './components/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

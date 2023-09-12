import './App.css'
import React from 'react';
import Home from './Pages/HomePage';
import Signup from './components/Signup';
import { Routes, Route} from 'react-router-dom'
import Signin from './components/Signin';
import Courses from './Pages/Courses';


const App: React.FC = () => {
  return (
    <>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path='/courses' element={<Courses/>}/>
    </Routes>
   </>
  );
};

export default App;

import './App.css'
import React from 'react';
import Home from './Pages/HomePage';
import Signup from './components/Signup';
import { Routes, Route} from 'react-router-dom'
import Signin from './components/Signin';

const App: React.FC = () => {
  return (
    <>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            
    </Routes>
   </>
  );
};

export default App;

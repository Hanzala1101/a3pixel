import React from 'react';
import './App.css';
import Index from './Components/Index.js'
import NServices from './Components/services/New-Service.js'
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route  path="/" element={<Index />}/>
          <Route path="/services" element={<NServices />} />
          {/* <Route path="/Career" element={<NCareer />} /> */}
      </Routes>
    </Router>

    </>
  );
}

export default App;

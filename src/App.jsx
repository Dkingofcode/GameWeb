//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  

  return (
    <>
      <div className='main'>
        <Router>

          <Routes>
            <Route path='/' element={<Home  />}  />
            <Route path='/about' element={<Home  />}  />
            <Route path='/portfolio' element={<Home  />}  />
            <Route path='/news' element={<Home  />}  />
            <Route path='/contact' element={<Home  />}  />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;

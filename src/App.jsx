import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'
import './index.css'


function App() {
  return (
    
      <Routes>
       {
         AllRoutes.map((route,index)=>(
          <Route path={route.path} element={route.element}/>
        ))
       }
      </Routes>
  
  );
}

export default App
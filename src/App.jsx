import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'
import './index.css'
import Layout from './Components/Layout';
import AllPaths from './routes/AllPaths';


function App() {
  return (
    
      <Routes>
       {AllRoutes.map((data) => {
        return data.hasLayout ? (
          <Route key={data.path} path={AllPaths.layout} element={<Layout />}>
            <Route path={data.path} element={data.element} />
          </Route>
        ) : (
          <Route path={data.path} element={data.element} />
        )
      })}
      </Routes>
  
  );
}

export default App
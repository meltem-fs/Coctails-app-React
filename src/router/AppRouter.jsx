import React from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbars from '../components/Navbar'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter
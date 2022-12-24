import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbars from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/search" element={<SearchForm/>} />
          <Route path="/detail" element={<CocktailList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter
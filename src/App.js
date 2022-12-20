import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'
function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
import AddToList from './Pages/AddToList';
import { MovieProvider } from './contexts/MovieContext';
function App() {

  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addToList" element={<AddToList />}></Route>


      </Routes>

    </MovieProvider>
  )
}

export default App

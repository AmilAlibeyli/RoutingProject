import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Əlaqələr from './əlaqələr'
import Haqqında from './haqqında'
import Home from './home'
import Navbar from './navbar'
import Error from './error'
import Works from './works'

function App() {

  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/əlaqələr" element={<Əlaqələr />} />
        <Route path="/haqqında" element={<Haqqında />}/ >
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works/>} />
        <Route path="*" element={<Error />} />

      </Routes>
    </>
  )
}

export default App

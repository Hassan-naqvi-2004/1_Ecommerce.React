import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import Login from './components/Login'


function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    </BrowserRouter> */}
   
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
   

    </>
  )
}

export default App

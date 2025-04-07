import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Main from './components/Main'
import PrivateRoutes from './components/PrivateRoutes'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route element={<PrivateRoutes/>}>
      <Route path='/blogs' element={<Main child={<Blogs/>}/>}/>
      <Route path='/addblog' element={<Main child={<AddBlog/>}/>}/>
      </Route>
     
    </Routes>
      
    </>
  )
}

export default App

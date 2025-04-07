import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    email:"",
    password:""
  })
  function capValue(){
    axios.post("https://blogapp-server-six.vercel.app/user/login",form).then((res) =>{
      alert(res.data.message)
      if(res.data.token){
        sessionStorage.setItem("token",res.data.token)
        navigate("/blogs")
      }
     
    }).catch((err) =>{
      console.log(err)
    })
  }
  return (
    <div style={{marginLeft:"40%"}}>
      <Typography variant='h3' style={{color:"darkblue"}}>BlogApp Login</Typography><br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{
        setForm({...form,email:e.target.value})
      }}/>
      <br></br>
      <br></br>
      <TextField  label="Password" type="password"variant="outlined" onChange={(e)=>{
        setForm({...form,password:e.target.value})}} />
      <br /><br/>
      <Button variant="contained" onClick={capValue}>Login</Button>
      <br /><br/>
      <Typography  style={{color:"darkblue"}}>
        <Link to={"/signup"}>New user? Please click here</Link></Typography>
    </div>
  )
}

export default Login

import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  
  });

  const handleSignup = () => {
    axios.post("https://blogapp-server-six.vercel.app/user/", form)
      .then((res) => {
        alert("Signup successful!");
        navigate("/"); 
      })
      .catch((err) => {
        console.log(err);
        alert("Signup failed!");
      });
    }
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginLeft:"20%",width:"50%"}}>
        <Typography variant='h3' style={{color:"darkblue"}}>BlogApp Signup</Typography><br></br>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
             <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>{
        setForm({...form,name:e.target.value})
      }} />
        </Grid2>
        <Grid2 size={6}>
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{
        setForm({...form,email:e.target.value})
      }} />
        </Grid2>
        <Grid2 size={12}>
        <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          rows={4}
          onChange={(e)=>{
            setForm({...form,address:e.target.value})
          }}
        />
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e)=>{
        setForm({...form,phoneno:e.target.value})
      }} />
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{
        setForm({...form,password:e.target.value})
      }}/>
        </Grid2>
        <Grid2 size={12}>
        <Button  variant="contained"  onClick={handleSignup}>Signup</Button>
        </Grid2>
        <Grid2 size={12}>
        <Typography  style={{color:"darkblue"}}>
        <Link to={"/"}>Registered user? Please click here</Link></Typography>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Signup

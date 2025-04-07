import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
           BlogApp
          </Typography>
          <Button color="inherit"><Link to={"/blogs"} style={{color:"white"}}>Home</Link></Button>
          <Button color="inherit"><Link to={"/addblog"} style={{color:"white"}}>Add Blog</Link></Button>
          <Button color="inherit"><Link to={"/"}  style={{color:"white"}} onClick={()=>{
            sessionStorage.removeItem("token")
          }}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default Navbar

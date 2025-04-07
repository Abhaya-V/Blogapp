import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosInterceptor';

const AddBlog = () => {
    const navigate = useNavigate()
      const [form,setForm] = useState({
        blogName:"",
        blogImageurl:"",
        blogDescription:""
      })
      const location = useLocation()
      useEffect(()=>{
        if(location.state!= null){
          setForm({...form,blogName:location.state.row.blogName,
            blogImageurl:location.state.row.blogImageurl,
           blogDescription :location.state.row.blogDescription,
          })
        }else{
          setForm({...form,blogName:"",
            blogImageurl:"",
            blogDescription:""
          })
        }
      },[])
      function capValue(){
        if(location.state!=null){
            axiosInstance.put("https://blogapp-server-six.vercel.app/blogs/update/"+location.state.row._id,form).then((res)=>{
              alert("updated successfully")
              navigate("/blogs")
            }).catch((error)=>{
              console.log(error)
            })
        }else{
          axiosInstance.post("https://blogapp-server-six.vercel.app/blogs/add",form).then((res) =>{
              alert("Blogs added")
              navigate("/blogs")
            }).catch((err) =>{
              console.log(err)
            })
        }
        // axios.post("http://localhost:3000/blogs/add",form).then((res) =>{
        //   alert("Blogs added",res.data)
        //   navigate("/blogs")
        // }).catch((err) =>{
        //   console.log(err)
        // })
      }
      
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5, p: 3}}>
                <Typography variant="h4" textAlign="center" color='black' >
                    Add New Blog
                </Typography>
                
                <TextField fullWidth label="Blog Name" variant="outlined" margin="normal" value={form.blogName} onChange={(e)=>{
                setForm({...form,blogName:e.target.value})
                }}  />
                <TextField fullWidth label="Image URL" variant="outlined" margin="normal" value={form.blogImageurl} onChange={(e)=>{
                setForm({...form,blogImageurl:e.target.value})
                }} />
                <TextField fullWidth label="Description" variant="outlined" margin="normal" value={form.blogDescription} multiline rows={3}  onChange={(e)=>{
                setForm({...form,blogDescription:e.target.value})
                }}/>

                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={capValue}>
                    Add Blog
                </Button>
            </Box>
        </Container>
    );
};

export default AddBlog;

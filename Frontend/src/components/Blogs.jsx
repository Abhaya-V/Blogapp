import { Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'
const Blogs = () => {
    // const data = [{blogname:"Foodblog",blogimg:"food.jpg",blogdes:"Food blog"},
    //     {blogname:"Travelblog",blogimg:"travel.jpg",blogdes:"Travel blog"},
    //     {blogname:"Movieblog",blogimg:"movie.jpg",blogdes:"Movie blog"}
    // ]
    const [data,setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
      axiosInstance.get("http://localhost:4000/blogs").then((res)=>{
       setData(res.data)
      }).catch((err) =>{
        console.log(err)
      })
    },[])
    function update_val(row){
      navigate("/addblog",{state:{row}})
    }
    function handleDelete(id) {
      if (window.confirm("Are you sure you want to delete this Blog?")) {
        axiosInstance .delete(`http://localhost:4000/blogs/delete/${id}`)
          .then((res) => {
            alert("Blog deleted successfully!");
            // Refresh the list
            setData(prevData => prevData.filter(blog=> blog._id !== id));
          })
          .catch((err) => {
            console.error("Error deleting blog:", err);
          });
      }
    }
  return (
    <Grid2 container spacing={2} style={{marginTop:"3%"}}>
        {data.map((row)=>(
  <Grid2 size={4}>
  <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={row.
          blogImageurl}
        title="blogs"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {row.blogName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {row.blogDescription}
        </Typography>
        <Button variant="contained" style={{marginRight:"3%"}} onClick={()=>{
          update_val(row)
        }}>UPDATE</Button>
        <Button variant="contained" onClick={() => handleDelete(row._id)} >DELETE</Button>
      </CardContent>
      
    </Card>
  </Grid2>
        ))}
 
</Grid2>
   
  )
}

export default Blogs

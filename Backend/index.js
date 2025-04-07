const express = require("express")
const app = express()

const morgan = require("morgan")
const cors = require("cors")
app.use(cors())
app.use(morgan("dev"))

require("dotenv").config()
require("./db/connection")
app.use(express.json());


const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");



app.use("/user", userRoutes);
app.use("/blogs", blogRoutes);





const PORT = process.env.PORT || 4000
app.listen(PORT,() =>{
    console.log(`server is listening on port ${PORT}`)
})
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

const path = require("path")
app.use(express.static(path.join(__dirname,'/dist')))



app.use("/user", userRoutes);
app.use("/blogs", blogRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  })



const PORT = process.env.PORT || 4000
app.listen(PORT,() =>{
    console.log(`server is listening on port ${PORT}`)
})
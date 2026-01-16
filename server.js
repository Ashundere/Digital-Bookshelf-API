const connectMongoDB = require("./db/connection")
require("dotenv").config();
const express = require("express")
const app = express()
const bookRouter = require("./routes/bookRoutes");
PORT= process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded())
app.use("/api", bookRouter);

connectMongoDB()
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
  })
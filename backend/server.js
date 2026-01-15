const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use("/",(req,res)=>{
    res.send("HI Vro")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running:${PORT}`);
    
})
require('dotenv').config();
const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    return res.send("HELLO")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server running ${PORT}`)
})

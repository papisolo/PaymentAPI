const express = require("express")
const app = express()
const homeRoute = require("./routes")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")


//All of our variables
const port = 8080


//connect to database
mongoose.connect(process.env.DATABASE_URL, {useNewURlParser :true} , (err) => {if(err)
{console.log(err)}; 
console.log("connected to database sucessfully")}, );



//middlewares
app.use(express.json())
app.use(express.urlencoded())


//route middlewares
/*app.use("/api", homeRoute)*/
app.use("/", homeRoute)



app.listen(8080, (err) => {if (err){console.log(err)};
console.log(`server running on port ${port}`);});

module.exports = app
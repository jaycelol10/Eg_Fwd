// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
  





/*
// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
// Setup empty JS object to act as endpoint for all routes
let projectData = {};


// Start up an instance of app
const app = express();
/* Middleware
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Cors for cross origin allowance

app.use(cors())
// Initialize the main project folder
app.use(express.static(__dirname+"/website"));
console.log(__dirname+"/website")
//port
const port = 3000;
app.listen(port,()=>console.log(`Server is running on port ${ port}`))
app.post('/add',(req,res)=>{
    const{newDate,temp,fellings} = req.body
    projectData.date=newDate
    projectData.temp=temp
    projectData.fellings=fellings
    res.end()
})
app.get('/add',(req,res)=>{
    res.send(projectData)
})
*/
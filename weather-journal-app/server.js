// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

//object as projectData

let projectData = {};

// Start up an instance of app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/website"));

app.use(cors());

//Start the server
const port = 3000;
app.listen(port,()=>console.log(`Server running on port ${port}`))


//send data to client side 
app.get('/all',(req,res)=>{
    
    res.send(projectData)
    
});

//post data 
app.post('/add',addData);

function addData(req,res){
    const{temp,date,feeling}=req.body
    console.log("Server side data"+ temp +""+date+""+feeling )
    //projectData = data;
    projectData.date = date;
    projectData.temp = temp;
    projectData.feeling = feeling;
    res.end();
       
}


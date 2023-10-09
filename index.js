import express from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Currently, Server running on port ${PORT}`);
    //console.log(data);
    });


//GET with the next
app.get("/next", (req, res,next) => {
    console.log('The response will be sent by the next function ...');
    next();
    }, (req, res) => {
        res.send('I just setup the route with a second callback');
    }
    );   

 
//GET - download method
app.get("/download", (req, res) => {
    res.download("./images/MLSAL.png");
});  

//GET - redirect method
app.get("/redirect", (req, res) => {
    res.redirect("https://www.google.com/");
});


//GET with routing parameters
app.get("/class/:id", (req, res) => {
    const studentID = Number(req.params.id);

    const student = data.filter((student) => student.id === studentID);
  
    if(student)
    res.send(student);
    else
    res.send("Invalid ID, Student not found");

    });



//Using the public folder at the root of the project
app.use(express.static("public"));

//Using the imafes folder at the route /images
app.use("/images",express.static("images"));




//GET request
app.get("/", (req, res) => {
    res.json(data);
    });   

//POST request
app.post("/create", (req, res) => {
    res.send("This is a POST request at /create");
    });   
            
    
//PUT request
app.put("/edit", (req, res) => {
    res.send("This is a PUT request at /edit");
    });   

//DELETE request
app.delete("/delete", (req, res) => {
    res.send("This is a DELETE request at /delete");
    });       
        

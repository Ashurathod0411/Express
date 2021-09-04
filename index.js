const { response } = require("express");
const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");

app.use(express.json());

//let StudentName = {};


app.get('/', (request, response) => {
    response.send('Hello World!');
 });

app.post("/createStudentList" , (request, response)  => {
    console.log("request", request.body);
    fs.writeFile("studentDetail.json", JSON.stringify(request.body), err => {
     if (err) throw err; 
       console.log("Done writing");
       response.status(200).send({ response : " Data received Successfully " });
    });
});

app.get("/getstudentName" , (request, response)  => {
    fs.readFile("studentDetail.json", (err, data) => {
      
        if (err) throw err;
       const studentInformation = JSON.parse(data);
       console.log("studentInformation",studentInformation);
       response.status(200).send(studentInformation);
    });
});
  
app.listen(port, () => {
    console.log(" Server has been listening on port " + port);
  });
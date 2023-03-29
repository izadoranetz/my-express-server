const express = require('express');

const app = express();


                        // req = request, res = response
app.get("/", function(request, response){
    response.send("Hello World!");
})

app.get("/contact", function(req, res){
    res.send("Contact me at: myemaul@email");
})

app.get("/about", function(req, res){
    res.send("Hi! I'm Iza, a designer and developer.");
})

app.get("/etc", function(req, res){
    res.send("Bla bla bla.");
})

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
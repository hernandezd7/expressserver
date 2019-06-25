// require package and storing it in express variable 
const express =  require('express');
// calling express and storing its value in a variable 
const app = express();
// routing any traffic going to the root url and sending back a response  
app.get('/',function(request,response ){
response.send("Hello World");
});
// rooting any traffic that going to / about and sending you are in my about page
app.get ('/about', function(req,res){
    res.send("you your in my thing .")
}

);
// application is listening for request on port 3000 or any ip address 
app.listen(3002);

console.log ("server is live on port 3000 ...");
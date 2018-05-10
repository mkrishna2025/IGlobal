const express = require('express');
const app = express();
const student = require('./student.js');

app.get('/', (req, res) => res.send('Welcome to Express Demo'));

app.use('/student', student);

app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   
   next();
});

app.get('*', function(req, res){
   res.send('Sorry, Need to Implement.');
});

app.listen(3000, () => console.log('App listening on port 3000!'));
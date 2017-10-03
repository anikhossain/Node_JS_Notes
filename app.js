var express = require ('express');
var app= express();

app.set('view engine', 'ejs');


console.log('listening to 3000');
app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.send('its the contact page');
});

app.get('/profile/:name', function(req, res){
  var data = { age: 22 , job: 'ninja', hobbies:['ramen','mission','trainig']};
  res.render('profile', {person : req.params.name, data : data});
});

app.get('/person/:id',function(req,res){
  res.send('This is profile of '+req.params.id);
});

app.listen(3000);

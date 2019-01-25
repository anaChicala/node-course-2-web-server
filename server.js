const express =  require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public' ));

app.use((req,res,next) => {
  let now = new Date().toString();


  console.log(now);
  next();



});

app.get('/',(req,res)=>{

  res.render('home.hbs',{
    welcome: 'Bienvenidos a mi pagina',
    anio:2018

  });

});
app.get('/about',(req,res)=>{

  res.render('about.hbs');

});

app.listen(3000, () => {
  console.log('Server is on');
});

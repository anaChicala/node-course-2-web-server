const express =  require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();



hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');


app.use((req,res,next) => {
  let now = new Date().toString();
  console.log(now);
  next();
});

app.use(express.static(__dirname + '/public' ));

app.get('/',(req,res)=>{

  res.render('home.hbs',{
    title: 'Welcome pagina',
    anio:2018

  });

});
app.get('/profile',(req,res)=>{

  res.render('profile.hbs',{
    title: 'Profile pagina',
    anio:2018

  });

});

app.get('/about',(req,res)=>{

  res.render('about.hbs',{
    title: 'Help pagina',
    anio:2018

  });

});

app.listen(port, () => {
  console.log('Server is on '+ port);
});

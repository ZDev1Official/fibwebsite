// Fibonacci website

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.render('index');
});

app.post('/fib', (req,res)=>{
  const fib = req.body.fibn.toString();
  res.render('fib', {fib: fib});
});

app.listen(port, ()=>{
  console.log('Listening on port', port);
});
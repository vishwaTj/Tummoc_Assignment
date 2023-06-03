const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/mongoose');


  
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello Backend');
})

app.use('/',require('./Routes'));


app.listen(port, ()=>{
    console.log(`Example listeninig on Port : ${port}`);
});


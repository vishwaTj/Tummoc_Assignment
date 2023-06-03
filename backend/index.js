const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req,res)=>{
    res.send('Hello Backend');
})

app.listen(port, ()=>{
    console.log(`Example listeninig on Port : ${port}`);
});


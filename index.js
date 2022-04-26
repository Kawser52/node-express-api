const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('This is second app. Kaj kore ');
})

app.listen(port, ()=>{
    console.log('The port is ', port);
})
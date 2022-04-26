const express = require('express');
const app = express();
const port = 5000;

const users = [
    {id: 0, name: "Boltu", age: 34, phone:'0298482-83873', des:'Boltu mar biye hoiche'},
    {id: 1, name: "Koltu", age: 64, phone:'0298482-83873', des:'Koltu mar biye hoiche'},
    {id: 2, name: "Chlotu", age: 34, phone:'0298482-83873', des:'Chlotu mar biye hoiche'},
    {id: 3, name: "Montu", age: 34, phone:'0298482-83873', des:'Montu mar biye hoiche'},
    {id: 4, name: "Gontu", age: 74, phone:'0298482-83873', des:'Gontu mar biye hoiche'},
    {id: 5, name: "Jhontu", age: 24, phone:'0298482-83873', des:'Boltu mar biye hoiche'},
    {id: 6, name: "Shantu", age: 14, phone:'0298482-83873', des:'Shantu mar biye hoiche'}
]

app.get('/users', (req, res)=>{
    res.send(users);
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user= users[id];
    res.send(user);
})

app.listen(port, ()=>{
    console.log('The port is ', port);
})
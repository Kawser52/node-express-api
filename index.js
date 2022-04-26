const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

const users = [
    {id: 0, name: "Boltu", age: 34, phone:'0298482-83873', des:'Boltu mar biye hoiche'},
    {id: 1, name: "Badesh", age: 64, phone:'0298482-83873', des:'Koltu mar biye hoiche'},
    {id: 2, name: "Ghatesh", age: 34, phone:'0298482-83873', des:'Chlotu mar biye hoiche'},
    {id: 3, name: "Manish", age: 34, phone:'0298482-83873', des:'Montu mar biye hoiche'},
    {id: 4, name: "Axar", age: 74, phone:'0298482-83873', des:'Gontu mar biye hoiche'},
    {id: 5, name: "Baxar", age: 24, phone:'0298482-83873', des:'Boltu mar biye hoiche'},
    {id: 6, name: "Shantu", age: 14, phone:'0298482-83873', des:'Shantu mar biye hoiche'}
]
app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else{
        res.send(users);
    }
   
})

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('histing post data', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user= users[id];
    res.send(user);
})


app.listen(port, ()=>{
    console.log('The port is ', port);
})
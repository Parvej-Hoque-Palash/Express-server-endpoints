const express = require('express');

const server = express();
const port = 5000;

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
///end_points
server.get('/test', (req,res) =>{
    res.send('Test Data!');
});

server.get('/name', (req,res) =>{
    res.send('Test Express Server!');
});

server.get('/me', (req,res) =>{
    res.send('<h1>Hello I am Palash Hoque!<h1/>');
});

server.get('/person', (req,res) =>{
    res.status(200).json({
        name: 'Palash Hoque',
        age: 24,
        address: {
            country: 'Bangladesh',
            city: 'Cumilla',
        },
    });
});
/*app.get('/',(req,res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app running on port ${port}`);
});*/
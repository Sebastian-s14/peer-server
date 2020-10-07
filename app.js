const express = require('express');
// const fs = require('fs');
// const { ExpressPeerServer } = require('peer');
const http = require('http');
const app = express();

const server = http.createServer(app);

// app.get('/', (req, res) => {
//     res.send('hola mundito con covid-19')
// })

app.get('/prueba', (req, res) => {
    res.send('hola mundito con covid-19')
})


const PORT = process.env.PORT || 9000
server.listen(PORT, () => {
    console.log("Conecte to port:" + PORT)
});

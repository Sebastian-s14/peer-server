const express = require('express');
const fs = require('fs');
const { ExpressPeerServer } = require('peer');
const http = require('http');
const app = express();

const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/myapp',
    // ssl: {
    //     key: fs.readFileSync('/etc/letsencrypt/live/media-server.playtecedu.com/fullchain.pem'),
    //     cert: fs.readFileSync('/etc/letsencrypt/live/media-server.playtecedu.com/privkey.pem')
    // }
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
    res.send('hola mundito con covid-19')
})

app.get('/test', (req, res) => {
    res.send('hola mundito con covid-19')
})


const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log("Conecte to port:" + PORT)
});

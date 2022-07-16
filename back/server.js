const express = require("express");
const app = express();
const cors = require('cors');

const port = 5000;

app.use(cors());

app.get('/api/hello', (req,res) => {
    res.json({
        name : 'next js',
        age : 25,
    });
});

app.listen(port, (req, res) => {
    console.log('server start on 5000 port');
});
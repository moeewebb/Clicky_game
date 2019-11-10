const express = require('express');

const app = express();

app.get('/', function(req, res){

    res.send('welcome to express');
});

const port = 3000;

app.listen(port, () => `Server running on port ${port}`);
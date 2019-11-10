const express = require('express');

const app = express();

app.get('/', function(req, res){

    res.send('welcome to express');
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
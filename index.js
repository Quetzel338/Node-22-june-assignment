const datbase = require('./mongoDb');
const express = require('express')
const routes = require('./routes/route');

const app = express();
port = 3000;

app.use(express.json());
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

app.use('/students', routes);

datbase();
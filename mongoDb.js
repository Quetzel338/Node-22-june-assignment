const mongoose = require('mongoose');
require('dotenv').config();

async function datbase(){
    await mongoose.connect(process.env.URL)
    .then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log({message : err})
    })
}

module.exports = datbase;
const mongoose = require('mongoose');
const { number, string } = require('prop-types');

const model = new mongoose.Schema({
    name:{
        type: string,
        required: true,
    },
    age:{
        type: number,
        required: true,
    },
    grade:{
        type: string,
        required: true,
    }

})

module.exports = mongoose.model('Student', model);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let final = new Schema({
    userName: {
        type: String
    }, 
    email: {
        type: String
    } //add comma here for more
});

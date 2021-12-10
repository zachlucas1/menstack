const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let final = new Schema({
    userName: {
        type: String
    }, 
    email: {
        type: String
    },
    verifyPassword: {
        type: String
    },
     accountType: {
        type: String
    },
     phone: {
        type: String
    }
});
module.exports = mongoose.model('Final', final);

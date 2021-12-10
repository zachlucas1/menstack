const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const finalRoutes = express.Router();
const PORT = 4000;
let final_model = require('./final.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/finals', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
finalRoutes.get('/',function(req, res) {
    final_model.find(function(err, finals) {
        if (err) {
            console.log(err);
        } else {
            res.json(finals);
        }
    });
});

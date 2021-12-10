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

finalRoutes.post('/add', function(req, res) {
    final = new final_model(req.body);
    console.log("Request Body", JSON.stringify(req.body))
    final.save()
        .then(final => {
            res.status(200).json({'final': 'final added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new final failed');
        });
});

finalRoutes.post('/:userName', function(req, res) {
    let {userName, password} = req.body;
    final_model.findOne({ userName: userName}, function(err, final) {
        if (!final_model) {
            return res.status(404).json({
              errors: [{ user: "not found" }],
            });
          } else 
            res.json(final.id);
    });
});

app.use('/finals', finalRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

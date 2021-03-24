var PORT = 5000;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const UserController = require('./controllers/user');
const AdminController = require('./controllers/admin');

const app = express();
app.use(bodyParser.json());

app.post('/email', UserController.sendEmail);
app.get('/email', AdminController.getAllEmails);

const uri = 'mongodb+srv://ferhad-dev:oblique2020@leads-generation.svbbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose
.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
//.connect('mongodb+srv://oblique:oblique2020@cluster0.ebmb1.mongodb.net/crew?retryWrites=true&w=majority')
.then(result => {
    app.listen(PORT);
})
.catch(err => {
    console.log(err);
})

/*

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});

*/
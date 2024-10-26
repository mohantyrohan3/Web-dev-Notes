const express = require('express');
const app = express();
const dbConnection = require('./config/database');
const userDb = require('./models/user');
const bodyParser = require('body-parser');

userDb.sync();
app.use(bodyParser.json());


app.get('/get', async (req, res) => {
    const users = await userDb.findAll();
    res.json(users);
});


app.post('/create', async (req, res) => {
    const {firstname, lastname } = req.body;
    const user = await userDb.create({ firstName:firstname, lastName:lastname });
    res.json(user);
});


app.put('/update/:id', async (req, res) => {
    const { firstname, lastname } = req.body;
    const user = await userDb.update({ firstName: firstname, lastName: lastname }, { where: { id: req.params.id } });
    res.json(user);
});



app.listen(5000, () => {
    console.log(`Server started on port`);
});
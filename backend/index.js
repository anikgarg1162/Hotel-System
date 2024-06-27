const express = require('express');
const connectwithdb = require('./db');
const Salary = require('./model/salary.model');

const app = express();
connectwithdb();

app.get('/', (req, res) => {
    res.send('Hello backend');
});

app.get('/mysalary', async (req, res) => {
    try {
        const msalary = await salary.find();
        console.log(msalary);
        res.json(msalary);
    } catch (error) {
        res.status(500).send('Error fetching salary details');
    }
});

app.listen(3000, () => {
    console.log('App is listening on port number 3000');
});

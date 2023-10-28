const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`<h1>The Result of the calculation is: ${result}</h1> `);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', (req, res,) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send(`<h1>Your BMI is: ${bmi}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

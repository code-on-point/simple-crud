const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact')
});

app.post('/contact', (req, res) => {
  console.log(req.body)
});

app.listen(port, () => console.log(`Application LIVE on ${port}`));

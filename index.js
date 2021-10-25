const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/api', routes.routes);

app.listen(5500, () => {
  console.log(`O servidor está rodando na porta 5500`)
})
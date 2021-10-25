const express = require('express');
const app = express();
const {bodyParser} = require("express");
const port = 8080;
const routes = require("./routes/routes");

app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.use('/api', routes.routes);




app.listen(port, () => {
    console.log("Server running in port: " + port);
});
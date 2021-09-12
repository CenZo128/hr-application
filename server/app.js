require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log("App is listening on port : ", PORT)
})
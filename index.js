require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const app = express();
const port = process.env.PORT || 3000;

// Permet de récupérer automatiquement les informations
// contenues dans le corps des requetes de type
// POST PATCH PUT
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
    console.log(`Je suis lancé, visite http://localhost:${port}`);
});
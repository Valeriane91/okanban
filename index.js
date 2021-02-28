//on charge les variables d'environnement
require('dotenv').config();

const express = require('express');

const app = express();

//on utilise la variable d'environnement PORT pour attribuer un port à notre serveur express
//en cas de pépin avec les variables d'enronnement, on se rabat sur une valeur par défaut
const PORT = process.env.PORT || 4141;

//configuration pour utiliser EJS comme moteur de templates
app.set('view engine', 'ejs');
app.set('views', './app/views');

//on lance le serveur
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
//on charge les variables d'environnement
require('dotenv').config();

const express = require('express');

const router = require('./app/router');

 
const app = express();


//on utilise la variable d'environnement PORT pour attribuer un port à notre serveur express
//en cas de pépin avec les variables d'enronnement, on se rabat sur une valeur par défaut
const PORT = process.env.PORT || 4141;

//configuration pour utiliser EJS comme moteur de templates
app.set('view engine', 'ejs');
app.set('views', './app/views');



//tant qu'on y est, on va devoir gérer des données envoyées en POST
//on ajoute le middleware urlencoded pour récupérer les infos du formulaire dans request.body
app.use(express.urlencoded({extended: true}));

//TODO : routeur à ajouter
app.use(router);

//on lance le serveur
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
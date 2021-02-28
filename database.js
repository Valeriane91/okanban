//On sépare les préoccupations : SoC
//ce module va uniquement gérer la connexion à la base oquiz

//on commence par importer mes variables d'environnement (contenu de .env)
require('dotenv').config();

//on importe la classe Client depuis le module pg
const {Client} = require('pg');

//on crée une instance en utilisant la variable d'environnement PG_URL
//cette instance est notre lien JS vers la BDD
const client = new Client(process.env.PG_URL);

//on connecte le client pour le rendre prêt à l'emploi
client.connect();
console.log(`Connection to DB ${process.env.PG_URL} successfull`);

//on place le client connecté dans l'export pour le rendre disponible dans d'autres fichiers de notre appli
module.exports = client;
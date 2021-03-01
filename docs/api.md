# Une API REST

Une API est un site web qui ne renvoie pas de HTML, à la place il renvoie des données brutes. Dans notre cas, formatées en JSON.

On va donc faire une projet NodeJS/Express qui va écouter les requetes HTTP entrantes, et en fonction de la requete, renvoyer un résultat en JSON.

## Liste des routes de notre application

GET    /lists      Renvoyer toutes les listes en JSON.
GET    /lists/:id  Renvoyer UNE liste, en JSON.
POST   /lists      Ajoute une nouvelle liste
PUT    /lists/:id  Modifie une liste
PATCH  /lists/:id  Modifie une liste
DELETE /lists/:id  Supprime une liste

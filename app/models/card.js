const CoreModel = require('./coreModel');

//on importe le client de connexion à postgres
const client = require('../database');


class Card extends CoreModel {

    _titre;
    _couleur;
    

    constructor(obj) {
       

        super(obj);
        this._titre = obj.titre;
        this._couleur = obj.couleur;
        
    }

module.exports = Card;
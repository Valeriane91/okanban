const CoreModel = require('./coreModel');

//on importe le client de connexion à postgres
const client = require('../database');


class List extends CoreModel {

    _name;

    constructor(obj) {
        super(obj);
        this._name = obj.name;
    }


}

module.exports = List;
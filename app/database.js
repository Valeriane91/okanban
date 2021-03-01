const {Sequelize} = require('sequelize');

//On instancie un objet de la classe sequelize
const sequelize = new Sequelize(process.env.PG_URL, {
    define: {

    //On ajoute une propriété dans l'objet pour désactiver l'ajout automatique de :
    //-createdAt
    //-updatedAt

    //timestamps: false,

    //permet le nom de champs en snake_case
    underscored: true
}
});

module.exports = sequelize;
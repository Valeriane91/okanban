require('dotenv').config();

const { List, Label, Card } = require('./app/models');

List.findByPk(1, {
    include: 'cards'
}).then((list) => {
    console.log(list.cards);
});

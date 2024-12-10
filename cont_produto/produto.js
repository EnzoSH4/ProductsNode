const Sequelize = require('sequelize');
const conexao = require("../db/bancoDeDados");

const produto = conexao.define('produto', {
    id :{
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    nome : {
        type : Sequelize.STRING,
        allowNull : false
    },
    categoria :{
        type : Sequelize.STRING,
        allowNull : false
    },
    preco :{
        type : Sequelize.STRING,
        allowNull : false
    }
})

produto.sync()
module.exports = produto;
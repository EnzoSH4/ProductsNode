const Sequelize = require('sequelize');
const conexao = new Sequelize('bdtests','root','',{


    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

module.exports = conexao;
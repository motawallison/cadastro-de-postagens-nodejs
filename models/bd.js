const Sequelize = require('sequelize')

//conexao com banco MySql
const sequelize = new Sequelize('postapp', 'root', 'senha@1', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
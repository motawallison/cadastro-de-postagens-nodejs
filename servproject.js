//carregando modulos
const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//config
//template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handelbars');

//conexao com banco MySql
const sequelize = new Sequelize('cadastro_hml', 'root', 'senha@1', {
    host: "localhost",
    dialect: 'mysql'
});

//criando rotas
app.get("/cad", function(req, res){
    res.render('formulario.handlebars')
    })

app.post('/add', function(req, res){
    res, send('Postagem recebida!')
})


//cria a porta do servidor
app.listen(4003, function(){
    console.log('Servidor rodando na url: http://localhost:4003')
});
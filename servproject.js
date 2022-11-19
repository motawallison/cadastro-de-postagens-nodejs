//carregando modulos
const express = require("express");
const app = express();
const handlebars = require('express-handlebars');


//config
//template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handelbars');

//Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())



//criando rotas
app.get("/cad", function(req, res){
    res.render('formulario.handlebars')
    })

app.post('/add', function(req, res){
    res.send(`Titulo: ${req.body.titulo}. Conteúdo: ${req.body.conteudo}`)
})


//cria a porta do servidor
app.listen(4003, function(){
    console.log('Servidor rodando na url: http://localhost:4003')
});
//carregando modulos
const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post')


//config
//template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handelbars');

//Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//criando rotas
app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('home.handlebars', {posts: posts})
    })
})

app.get('/cad', function(req, res){
    res.render('formulario.handlebars')
    })

app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send(`Houve um erro ${erro}`)
    })
})
 
app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {
        'id': req.params.id
    }}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send(`Houve um erro ${erro}`)
    })
})

//cria a porta do servidor
app.listen(4003, function(){
    console.log('Servidor rodando na url: http://localhost:4003')
});
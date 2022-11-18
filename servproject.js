//carregando modulo
const express = require("express");
const app = express();

//definir rotas/caminhos com HTML
app.get("/", function(req, res){

});


//cria a porta do servidor
app.listen(4003, function(){
    console.log('Servidor rodando na url: http://localhost:4003')
});
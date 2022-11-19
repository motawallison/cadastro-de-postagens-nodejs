const bd = require('./bd')

const Post = bd.sequelize.define('postagens',{
    titulo: {
        type: bd.Sequelize.STRING
    },
    conteudo: {
        type: bd.Sequelize.TEXT
    }
})

Post.sync()

module.exports = Post
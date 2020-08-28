//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    sucecessPage
} = require('./pages')


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
//receber os dados do req body
.use(express.urlencoded({extended: true}))
//configuração de arquivos estáticos
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/sucess-page", sucecessPage)
.post("/save-classes", saveClasses)

.listen(5500)
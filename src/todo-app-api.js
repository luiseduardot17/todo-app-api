import express from 'express'
import controllerTarefa from './controllers/tarefa-controller.js'
import usuarioController from './controllers/usuario-controller.js'

const app = express()
const port = 3000

usuarioController(app)
controllerTarefa(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/usuario`)
    console.log(`http://localhost:${port}/tarefa`)
})
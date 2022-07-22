import express from 'express'
import controllerTarefa from './controllers/tarefa-controller.js'
import usuarioController from './controllers/usuario-controller.js'
/*import autenticacao from './middleware/autenticacao.js'*/

const app = express()
app.use(express.json());
const port = 3000

/*autenticacao(app)*/
usuarioController(app)
controllerTarefa(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/usuario`)
    console.log(`http://localhost:${port}/tarefa`)
})
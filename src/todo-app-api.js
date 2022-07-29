import express from 'express'
import cors from 'cors'
import controllerTarefa from './controllers/tarefa-controller.js'
import usuarioController from './controllers/usuario-controller.js'
/*import autenticacao from './middleware/autenticacao.js'*/

const app = express()
app.use(cors());
app.use(express.json());


/*autenticacao(app)*/
usuarioController(app)
controllerTarefa(app)

export default app
import Tarefa from '../models/tarefa.js'

const controllerTarefa = (app) => {
    app.get('/tarefa', (req, res) => {
        res.json('Rota ativada com GET e recurso tarefa: valores de tarefas devem ser retornados')
    })
    app.post('/tarefa', (req, res) => {
        const tarefas = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao)
        console.log(tarefas);

        res.json('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados')
    })
}

export default controllerTarefa
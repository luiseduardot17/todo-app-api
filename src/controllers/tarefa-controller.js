const controllerTarefa = (app) => {
    app.get('/tarefa', (req, res) => {
        res.json('Rota ativada com GET e recurso tarefa: valores de tarefas devem ser retornados')
    })
    app.post('/tarefa', (req, res) => {
        console.log(req.body);
        res.json('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados')
    })
}

export default controllerTarefa

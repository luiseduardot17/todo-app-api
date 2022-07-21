import TarefaModel from "../models/tarefa.js"
import ValidacaoTarefa from "../services/validacaoTarefa.js"


const controllerTarefa = (app) => {
    const tarefaModel = new TarefaModel()

    app.get('/tarefa', (req, res) => {
        const tarefas = tarefaModel.pegaTarefas()
        res.json({
            "tarefas": tarefas,
            "erro": false
        })
    })

    // Rota para pegar um dado especifico baseado no parametro enviado
    app.get('/tarefa/titulo/:titulo', (req, res) => {

        // recebe o parametro da rota
        const titulo = req.params.titulo

        // chama o método que faz a busca no bd usando o parametro enviado
        // como filtro
        const tarefa = tarefaModel.pegaUmaTarefa(titulo)

        // responde a requisição usando o metodo para pegar uma tarefa
        res.json(
            {
                "tarefa": tarefa,
                "erro": false
            }
        )
    })

    app.post('/tarefa', (req, res) => {
        try {
            const novaTarefa = new ValidacaoTarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao)
            // chama o metodo para inserir a tarefa no banco de dados
            tarefaModel.insereTarefa(novaTarefa)

            // retorna um json com uma mensagem e com usuario inserido
            res.json(
                {
                    "msg": "Tarefa inserida com sucesso",
                    "tarefa": novaTarefa,
                    "erro": false
                }
            )
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }

    })
}

export default controllerTarefa
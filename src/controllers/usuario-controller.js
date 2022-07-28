import UsuarioModel from "../models/usuario.js"
import ValidaUsuario from "../services/validacaoUsuario.js"
import db from "../database/db-sqlite.js"

const usuarioController = (app) => {
    // cria uma instancia do classe model usuario que sera usada para todas rotas
    const modelUsuario = new UsuarioModel()

    app.get('/usuario', (req, res) => {
        db.all('SELECT * FROM USUARIOS', (erro, linhas) => {
            if (erro) {
                res.json({
                    "mensagem": erro.message,
                    "erro": true
                })
            } else {
                res.json({
                    "usuarios": linhas,
                    "erro": false
                })
            }
        })
    })

    app.get('/usuario', async (req, res) => {
        try {
            const todosUsuarios = await modelUsuario.pegaUsuarios()
            //responde a requisição usando o metodo para pegar todos usuarios
            res.json(todosUsuarios)

        } catch (error) {
            res.json(error)
        }
    })


    // Rota para pegar um dado especifico baseado no parametro enviado
    app.get('/usuario/email/:email', (req, res) => {

        // recebe o parametro da rota
        const email = req.params.email

        // chama o método que faz a busca no bd usando o parametro enviado
        // como filtro
        const usuario = modelUsuario.pegaUmUsuario(email)

        // responde a requisição usando o metodo para pegar todos usuarios
        res.json(
            {
                "usuario": usuario,
                "erro": false
            }
        )
    })

    app.post('/usuario', (req, res) => {
        try {
            const novoUsuario = new ValidaUsuario(req.body.nome, req.body.email, req.body.senha)
            modelUsuario.insereUsuario(novoUsuario)

            // retorna um json com uma mensagem e com usuario inserido
            res.json(
                {
                    "msg": "Usuário inserido com sucesso",
                    "usuario": novoUsuario,
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

    app.post('/usuario', (req, res) => {
        const body = req.body
        db.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA)
        VALUES (?, ?, ?)`, body.nome, body.email, body.senha,
            (erro) => {
                if (erro) {
                    res.json({
                        "mensagem": erro.message,
                        "erro": true
                    })
                } else {
                    res.json({
                        "erro": false
                    })
                }
            })
    })

    app.delete('/usuario/email/:email', (req, res) => {
        try {
            const email = req.params.email
            const resposta = modelUsuario.deletaUsuario(email)

            res.json(resposta)

        } catch (error) {
            res.json(error)
        }

    });

    app.put('/usuario/email/:email', (req, res) => {
        const body = req.body
        const email = req.params.email

        modelUsuario.atualizaUsuario(email, body)

        res.json({ "msg": "Usuario atualizado" })
    })

}

export default usuarioController
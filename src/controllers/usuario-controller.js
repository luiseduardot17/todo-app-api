import Usuario from '../models/usuario.js'

const usuarioController = (app) => {

    app.get('/usuario', (req, res) => {
        const usuario = new Usuario()

        res.json({ "usuarios": Usuario.pegaUsuarios() })
    })

    app.post('/usuario', (req, res) => {
        const cliente = new Usuario(req.body.nome, req.body.email, req.body.senha)
        cliente.insereUsuario(cliente)
        
        res.json("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
    })

}

export default usuarioController
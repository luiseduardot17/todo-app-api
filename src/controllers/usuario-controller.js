const usuarioController = (app)=>{
    app.get('/usuario', (req, res)=> {
        res.send("Rastreamento da aplicação sendo feito com nodemon :)")
    })
    app.post('/usuario', (req, res)=> {
        res.send("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
    })
    
}

export default usuarioController
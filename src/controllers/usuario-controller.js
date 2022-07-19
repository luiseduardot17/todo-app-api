const usuarioController = (app)=>{
    app.get('/usuario', (req, res)=> {
        res.json("Rastreamento da aplicação sendo feito com nodemon :)")
    })
    app.post('/usuario', (req, res)=> {
        console.log(req.body);
        res.json("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
    })
    
}

export default usuarioController
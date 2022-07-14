import express from 'express'

const app = express()
const port = 3000

app.get('/usuarios', (req, res) => {
    res.send('Rota ativada com GET e recurso usuarios: valores de usuarios devem ser retornados')
})
app.get('/tarefas', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/usuarios`)
    console.log(`http://localhost:${port}/tarefas`)
})

export (app) => {
    
}
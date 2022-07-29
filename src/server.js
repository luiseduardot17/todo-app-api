import app from './todo-app-api.js'

const port = 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})
import app from './todo-app-api.js'

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}/usuario`)
})
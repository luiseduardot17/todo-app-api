import app from '../src/todo-app-api.js'
import request from 'supertest'

describe("testando rotas usuario", ()=>{
    test("rota GET", async ()=>{
        const resposta = await request(app).get('/usuario')
        console.log(resposta.body);
        expect(resposta.status).toBe(200)
    })
})
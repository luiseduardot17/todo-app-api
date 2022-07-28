import { seisDigitos } from "../src/services/validacaoUsuario.js"

describe("Testando validacao", ()=>{
    test("verdadeira", ()=>{
        expect(seisDigitos("123456")).toBe(true)
    })

    test("falsa", ()=>{
        expect(seisDigitos("12").toBe(false))
    })
})
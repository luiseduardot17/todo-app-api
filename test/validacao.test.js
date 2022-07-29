import { validaSenha } from "../src/services/validacaoUsuario.js"

describe("Testando validacao", ()=>{
    test("verdadeira", ()=>{
        expect(validaSenha("123456")).toBe(true)
    })

    test("falsa", ()=>{
        expect(validaSenha("12").toBe(false))
    })
})
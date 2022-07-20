import bd from '../database/bd.js'

let id = 0
class Usuario {
    constructor(nome, email, senha){
        this.id = id++
        this.nome = nome,
        this.email = email,
        this.senha = senha
    }

    insereUsuario = (usuario)=>{
        console.log(bd.usuario);
        bd.usuario.push(this)
        console.log(bd.usuario);
    }

    pegaUsuarios = ()=>{
        return bd.usuario
    }
}

export default Usuario
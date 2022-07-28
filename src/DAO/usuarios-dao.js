import db from '../database/db-sqlite.js'

const usuarioDao = {
    pegaTodosUsuarios: () => {
        return new Promisse((resolve, reject) => {
            db.all()
        })
    },

    insereUsuario: (usuario) => {

    },

    deletaUsuario: (email) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM USUARIOS WHERE EMAIL = ?`, email,
                (erro) => {
                    if (erro) {
                        reject({
                            "mensagem": erro.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "msg": `Usuário com email ${email} deletado com sucesso`,
                            "erro": false
                        })
                    }
                })
        })
    }
}


export default usuarioDao
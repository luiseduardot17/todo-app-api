import db from '../database/db-sqlite.js'

const usuarioDao = {
    pegaTodosUsuarios : ()=>{
        return new Promisse((resolve, reject)=>{
            db.all()
        })
    },
    insereUsuario: (usuario)=>{

    }
}


export default usuarioDao
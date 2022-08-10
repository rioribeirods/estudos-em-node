import { v4 as uuidv4 } from 'uuid'; 

export default class UsuariosM {
/**
   * @param {Number} idUsuario
   * @param {String} email
   */
    constructor(idUsuario, email) {
        this.id = uuidv4();
        this.userId = idUsuario;
        this.email = email;
    }
}
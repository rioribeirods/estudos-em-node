import { v4 as uuidv4 } from 'uuid'; 

export default class TarefasM {
    /**
   * @param {Number} idUsuario
   * @param {String} texto
   * @param {"Pendente" | "Completo" | "Cancelado"} status
   */
    constructor(idUsuario, texto, status){
        this.id = uuidv4();
        this.userId = idUsuario;
        this.text = texto;
        this.status = status;
    }
}

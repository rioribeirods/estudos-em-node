import { v4 as uuidv4 } from 'uuid'; 

class TarefasM {
    constructor(idUsuario, texto, status){
        this.id = uuidv4();
        this.userId = idUsuario;
        this.text = texto;
        this.status = status;
    }
}

export default TarefasM;
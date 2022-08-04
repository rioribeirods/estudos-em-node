import TarefasM from "../models/tarefas.js";
import { bdTarefas } from "../infra/bd.js";


export const Tarefas = (app) => {
    app.get("/tarefas", (req,res) => {
        res.send("devolver todas as tarefas");
    });

    app.post("/tarefas", (req, res) => {
        const { idUsuario, texto, status } = req.body;
        
        const dataM = new TarefasM(idUsuario, texto, status);

        bdTarefas.push(dataM);
        res.send(bdTarefas);
    });

    app.get('/tarefas/:id', (req, res) => {
        res.send(req.params.id)
    });
};


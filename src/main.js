import express  from "express";
const app = express();
import { Tarefas } from "./controllers/tarefas.js";
import { Usuarios } from "./controllers/usuarios.js";



Tarefas(app);
Usuarios(app);

app.listen(4000);
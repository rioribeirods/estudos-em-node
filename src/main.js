import express  from "express";
const app = express();
app.use(express.json());
import { Tarefas } from "./controllers/tarefas.js";
import { Usuarios } from "./controllers/usuarios.js";



Tarefas(app);
Usuarios(app);

app.listen(4000);
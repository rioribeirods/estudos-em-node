/* Apos instalarmos o "express" o importamos para podermos começar
 a usa-lo neste arquivo */
 import express from "express";
 // /
 import bd from "./infra/sqlite-db.js";
 
 /* Criamos uma contante chamada app que irá conter a execução do express 
 ou seja irá conter toda a instancia (fluxo) de nossa api */
 const app = express();
 
 // Middleware
 /* Neste caso usamos a instancia de nosso app para podermos converter a 
 requisição de "Plain Text" para "Json" */
 app.use(express.json());
 
 // Routers
 //  Aqui importamos nossas rotas
 import { Tarefas } from "./controllers/tarefas.js";
 import { Usuarios } from "./controllers/usuarios.js";
 
 // Executamos nossas rotas passando o "app" nossa instancia
 Tarefas(app, bd);
 Usuarios(app);
 
 /* Neste caso estamos pedindo para a api ficar escutando uma porta
 ou seja que ela fique online escutando as requisições que forem realizadas
 na porta passada neste caso a "4000" */
 app.listen(4000, () => {
   console.log("app listen: http://localhost:4000");
 });
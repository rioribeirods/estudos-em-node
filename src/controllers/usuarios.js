export const Usuarios = (app) => {
    app.get("/usuarios", (req,res) => {
        res.send("devolver todos os usuários");
    });
};
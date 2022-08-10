const getTasks = (bd) => {
    return new Promise((res, rej) => {
        bd.all("SELECT * FROM TAREFAS", (erro, rows) => {
            if(erro) {
                rej(erro.message);
            } else {
                res(rows);
            }
        });
    });
}


export default getTasks 
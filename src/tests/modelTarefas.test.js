const TarefasM = require("../models/tarefas.js");

test("Teste do model", () =>{
    expect(new TarefasM(2, "Ler livro", "pendente")).toBe({
        userId: 2,
        text: 'Ler livro',
        status: 'pendente',
    });
});
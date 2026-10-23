// 1. Crie o objeto fixo (Enum) para os turnos.
const Turno = Object.freeze({
    MANHA: "Manhã",
    TARDE: "Tarde",
    NOITE: "Noite"
});

// 2. Crie a classe Aluno com o seu constructor.
class Aluno {
    id;
    nome;
    dataMatricula;
    turno;
    estaAtivo;

    constructor(id, nome, dataMatricula, turno) {
        this.id = id;
        this.nome = nome;
        this.dataMatricula = dataMatricula; // Pode ser Texto ou objeto Date
        this.turno = turno;
        this.estaAtivo = true; // Dica: nasce como true por padrão no construtor!
    }
}

// 3. Instancie 2 alunos usando o new.
const aluno1 = new Aluno(1, "Ana Silva", "2026-02-10", Turno.MANHA);
const aluno2 = new Aluno(2, "Carlos Souza", "2026-02-12", Turno.TARDE);

console.log("--- Estado Inicial dos Alunos ---");
console.log(aluno1);
console.log(aluno2);

// 4. Mude o turno de um deles e desative o outro (estaAtivo = false).
aluno1.turno = Turno.NOITE; 
aluno2.estaAtivo = false;

// 5. Mostre no console como ficaram.
console.log("\n--- Estado Final Após as Modificações ---");
console.log(aluno1);
console.log(aluno2);

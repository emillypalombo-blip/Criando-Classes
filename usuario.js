// classe
// Enum
const Genero = Object.freeze({
    M: "M",
    F: "F",
    OUTRO: "Outro"
})
class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;

// método construtor
constructor(id, nome, senha, dataNascimento, genero){
    this.id = id;
    this.nome = nome;
    this.senha = senha;
    this.dataNascimento = new Date(dataNascimento);
    this.genero = genero;
    this.isAdmin = false;
}

// métodos de classe --> função
perfil(){
    return "Nome: " + this.nome + "Data de Nascimento:" + this.dataNascimento.toString();
}
}


const user1 = new Usuario(1, "Emilly Palombo", "1243", "2010-01-14T00:00:00", Genero.F);
const user2 = new Usuario(2, "João Pedro", "1233", "2016-06-14T00:00:00", Genero.M);
console.log(user1)
user1.nome = "Emilly Magnífica";
console.log(user1)
console.log(user1.perfil())
console.log(user2.perfil())

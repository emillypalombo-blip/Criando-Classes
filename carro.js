// 1. Crie a classe Carro com seu construtor completo baseado na Entidade
class Carro {
    constructor(idCarro, nome, cor, disponivel, anoFabricacao) {
        this.idCarro = idCarro;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = disponivel;
        this.anoFabricacao = anoFabricacao;
    }
}

// 2. Instancie 3 objetos diferentes na memória usando new
const carro1 = new Carro(1, "Fusca", "Azul", true, 1975);
const carro2 = new Carro(2, "Civic", "Preto", false, 2020);
const carro3 = new Carro(3, "Onix", "Branco", true, 2023);

// 3. Mostre no console cada um dos objetos criados
console.log("--- Objetos Criados ---");
console.log(carro1);
console.log(carro2);
console.log(carro3);

// 4. Modifique dois valores e mostre os objetos atualizados
carro1.cor = "Vermelho";       // Modificando a cor do carro1
carro2.disponivel = true;      // Modificando a disponibilidade do carro2

console.log("\n--- Objetos Atualizados ---");
console.log(carro1);
console.log(carro2);

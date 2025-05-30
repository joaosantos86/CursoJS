// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Julio', 'Miranda', 32);
// const pessoa3 = criaPessoa('Luan', 'Oliveira', 15);
// const pessoa4 = criaPessoa('Renato', 'Silva', 48);

// console.log (pessoa1.nome, pessoa2.idade)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade aual é ${this.idade} anos`);
        },
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`)

        incrementaIdade() {
            this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
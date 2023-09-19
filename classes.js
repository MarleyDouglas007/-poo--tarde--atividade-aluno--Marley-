class Aluno {
    constructor(foto, primeiroNome, ultimoNome, dataDeNascimento, cidade) {
        this.foto = foto;
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.dataDeNascimento = new Date(dataDeNascimento);
        this.cidade = cidade;
    }
    getNomePadraoAmericano() {
        return `${this.ultimoNome},${this.primeiroNome}`;
    }

    getIdade() {
        let hoje = new Date();
        let idade = hoje.getFullYear() - this.dataDeNascimento.getFullYear();/*para pegar o ano e armazenar o ano */
        return idade;
    }

}

//classe contaneiner

// add 2 atributos a esta classe:
// título
// lista de Alunos
//o construtor deverá ter 1 entrada: título
// o construtor deverá inicializar :
//o atributo título com aentrada título 
//e o atributo lista de alunos com um array vazio 

class turma {
    constructor(titulo) {
        this.titulo = titulo;
        this.listaDeAlunos = [];
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)
    }
}


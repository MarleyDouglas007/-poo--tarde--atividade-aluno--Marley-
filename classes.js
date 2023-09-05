class Aluno {
    constructor(foto, primeiroNome,ultimoNome, dataDeNascimento, cidade) {
        this.foto = foto;
        this.primeiroNome =primeiroNome ;
        this.ultimoNome = ultimoNome;
        this.dataDeNascimento = dataDeNascimento;
        this.cidade = cidade;
    }
    getNomePadraoAmericano(){
        return `${this.ultimoNome},${this.primeiroNome}`;
    }

getIdade(){
    let hoje = new Date();
    let idade = hoje.getFullYear() - this.dataDeNascimento.getFullYear();/*para pegar o ano e armazenar o ano */
    return idade; 
}

}


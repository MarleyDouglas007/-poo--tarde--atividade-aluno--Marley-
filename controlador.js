//trazendo os elementos em html parao javascript

let inputPrimeiroNome = document.getElementById("iptPrimeiroNome")
let inputUltimoNome = document.getElementById("iptUltimoNome")
let inputDatadeNascimento = document.getElementById("iptDatadeNascimento")
let inputCidade = document.getElementById("iptCidade")
let buttonCadastrar = document.getElementById("btnCadastrar")
let divContaneinerCards = document.getElementById("containerDeCards")
inputPrimeiroNome.value = 'alex'
inputUltimoNome.value = 'jimmy'
inputDatadeNascimento.value = '2003-12-02'
inputCidade.value = 'alagoas'


//listeners ou fofoqueiros ----------------------------------
buttonCadastrar.addEventListener('click', quandoClicarEmCadastrar);
//-----------------------------------------------------------

let modulo2 = new turma("2° módulo - vespertino ");



function quandoClicarEmCadastrar() {
    let alunoTemp = new Aluno(
        '',
        inputPrimeiroNome.value,
        inputUltimoNome.value,
        inputDatadeNascimento.value,
        inputCidade.value
    );
    modulo2.adicionarAluno(alunoTemp);
    desenharCards(divContaneinerCards);
    console.log(listaDeAlunos);
}
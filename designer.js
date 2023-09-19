function desenharCards(container) {
//esvaziando container
container.innerHTML = '';

//lista completa
    for (let i = 0; i < modulo2.listaDeAlunos.length ; i++) {
        container.innerHTML +=
            `
    <div class='card'>
        <img class='foto' src='img/marley.jpg'>
        <div class='nome'>${modulo2.listaDeAlunos[i].getNomePadraoAmericano()}</div> 
        <div class='idade'>${modulo2.listaDeAlunos[i].getIdade()}</div> 
        <div class='cidade'>${modulo2.listaDeAlunos[i].cidade}</div>
    </div>`
    }
}
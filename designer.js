function desenharCards(container) {
//esvaziando container
container.innerHTML = '';

//lista completa
    for (let i = 0; i < listaDeAlunos.length; i++) {
        container.innerHTML +=
            `
    <div class='card'>
        <img class='foto' src='img/marley.jpg'>
        <div class='nome'>${listaDeAlunos[i].getNomePadraoAmericano()}</div> 
        <div class='idade'>${listaDeAlunos[i].getIdade()}</div> 
        <div class='cidade'>${listaDeAlunos[i].cidade}</div>
    </div>`
    }
}
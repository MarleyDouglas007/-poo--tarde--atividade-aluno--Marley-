let Aluno1 = new Aluno('img/marley.jpg','Marley','santos',new Date("2000-12-1"),'NY',)
let Aluno2 = new Aluno('img/paula.jpeg','Paula','Lins',new Date("2012-4-5"),'Maceió',)
let Aluno3 = new Aluno('img/milton.webp','Milton','branco',new Date("2013-6-9"),'Bolivia',)
let Aluno4 = new Aluno('img/ruiva.jpeg','Ruiva','red',new Date("1999-3-9"),'Texas',)
let Aluno5 = new Aluno('img/belly.jpeg','Belly','belinha',new Date("2020-6-4"),'NY',)
let Aluno6 = new Aluno('img/rouse01.jpeg','Rouse','Maria',new Date("2001-5-7"),'RIO DE JANEIRO',)
let Aluno7 = new Aluno('img/mario.jpeg','Victor','Galdino',new Date("2003-8-23"),'PARÌS',)
let Aluno8 = new Aluno('img/ricador.jpg','Gabriel','Elinaldo',new Date("1993-5-3"),'BRASIL',)
let Aluno9 = new Aluno('img/pedro.jpg','Pedro','bob',new Date("2020-11-13"),'USA',)
let Aluno10 = new Aluno('img/joao01.webp','João','007',new Date("1975-1-2"),'USA',)

console.log(Aluno1.dataDeNascimento.getFullYear());
console.log(Aluno1.getIdade());

let listadealunos = [] 
listadealunos.push(Aluno1)
listadealunos.push(Aluno2)
listadealunos.push(Aluno3)
listadealunos.push(Aluno4)
listadealunos.push(Aluno5)
listadealunos.push(Aluno6)
listadealunos.push(Aluno7)
listadealunos.push(Aluno8)
listadealunos.push(Aluno9)
listadealunos.push(Aluno10)
for (let i = 0; i < listadealunos.length; i++) {
    document.write(`
    <div class='card'>
        <img class='foto' src='${listadealunos[i].foto}'>
        <div class='nome'>${listadealunos[i].getNomePadraoAmericano()}</div> 
        <div class='idade'>${listadealunos[i].getIdade()}</div> 
        <div class='cidade'>${listadealunos[i].cidade}</div>
    </div>`)
    }
    

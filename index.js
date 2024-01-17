// Solicitando ao usuário inserir o nome do herói e a quantidade de XP
let nomeDoHeroi = prompt("Digite o nome do herói:");
let experienciaDoHeroi = prompt("Digite a quantidade de experiência do herói:");

// Convertendo a entrada para número
experienciaDoHeroi = parseInt(experienciaDoHeroi);

// Utilizando estrutura de decisão
if (experienciaDoHeroi < 1000) {
    console.log(`${nomeDoHeroi} é do tipo Ferro.`);
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    console.log(`${nomeDoHeroi} é do tipo Bronze.`);
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    console.log(`${nomeDoHeroi} é do tipo Prata.`);
} else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
    console.log(`${nomeDoHeroi} é do tipo Ouro.`);
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    console.log(`${nomeDoHeroi} é do tipo Platina.`);
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    console.log(`${nomeDoHeroi} é do tipo Ascendente.`);
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    console.log(`${nomeDoHeroi} é do tipo Imortal.`);
} else {
    console.log(`${nomeDoHeroi} é do tipo Radiante.`);
}

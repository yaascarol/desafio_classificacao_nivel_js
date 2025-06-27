/**deve usar:
 * variaveis
 * operadores
 * laçoes de repeticao
 * estrturas de decisoes*/

let nomeHeroi = prompt("Digite o nome do herói: ");
let xpDoHeroi = prompt("Informe a quantidade de experiência (XP) do herói: ");
let quantidadeXp = xpDoHeroi;
let nivelExperiencia = ["ferro", "bronze", "prata", "ouro", "platina", "ascendente", "imortal", "radiante"];

let resultado = "";

if (xpDoHeroi <= 1000){
    resultado = "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[0] + " com " + quantidadeXp + " XP.";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
    resultado =   "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[1] + " com " + quantidadeXp + " XP.";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    resultado = "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[2] + " com " + quantidadeXp + " XP.";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
    resultado = "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[3] + " com " + quantidadeXp + " XP.";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    resultado = "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[4] + " com " + quantidadeXp + " XP.";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    resultado = "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[5] + " com " + quantidadeXp + " XP.";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    resultado = "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[6] + " com " + quantidadeXp + " XP.";
} else{
    resultado = "O herói " + nomeHeroi + " está no nível " + nivelExperiencia[7] + " com " + quantidadeXp + " XP.";
}

document.getElementById("resultado").innerHTML = `<p>${resultado}</p>`;

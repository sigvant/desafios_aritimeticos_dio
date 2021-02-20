// Desafio
// Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

// Entrada
// Você receberá um valor inteiro N (0 < N < 1000000).

// Saída
// Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

 
// Exemplo de Entrada	Exemplo de Saída
// 576

// 576
// 5 nota(s) de R$ 100,00
// 1 nota(s) de R$ 50,00
// 1 nota(s) de R$ 20,00
// 0 nota(s) de R$ 10,00
// 1 nota(s) de R$ 5,00
// 0 nota(s) de R$ 2,00
// 1 nota(s) de R$ 1,00

// 11257

// 11257
// 112 nota(s) de R$ 100,00
// 1 nota(s) de R$ 50,00
// 0 nota(s) de R$ 20,00
// 0 nota(s) de R$ 10,00
// 1 nota(s) de R$ 5,00
// 1 nota(s) de R$ 2,00
// 0 nota(s) de R$ 1,00

// 503

// 503
// 5 nota(s) de R$ 100,00
// 0 nota(s) de R$ 50,00
// 0 nota(s) de R$ 20,00
// 0 nota(s) de R$ 10,00
// 0 nota(s) de R$ 5,00
// 1 nota(s) de R$ 2,00
// 1 nota(s) de R$ 1,00


let valor = parseInt(gets());
console.log(valor);

valor_em_100 = parseInt(valor / 100);
resto = valor % 100;

valor_em_50 = parseInt(resto / 50);
resto = resto % 50;

valor_em_20 = parseInt(resto / 20);
resto = resto % 20;

valor_em_10 = parseInt(resto / 10);
resto = resto % 10;

valor_em_5 = parseInt(resto / 5);
resto = resto % 5;

valor_em_2 = parseInt(resto / 2);
resto = resto % 2;

valor_em_1 = parseInt(resto / 1);

console.log(valor_em_100 + " nota(s) de R$ 100,00");
console.log(valor_em_50 + " nota(s) de R$ 50,00");
console.log(valor_em_20 + " nota(s) de R$ 20,00");
console.log(valor_em_10 + " nota(s) de R$ 10,00");
console.log(valor_em_5 + " nota(s) de R$ 5,00");
console.log(valor_em_2 + " nota(s) de R$ 2,00");
console.log(valor_em_1 + " nota(s) de R$ 1,00");
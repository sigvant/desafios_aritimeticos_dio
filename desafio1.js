// Desafio
// Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

// Entrada
// Você receberá seis valores, negativos e/ou positivos.

// Saída
// Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

numeros = Array(6);

numeros[0] = gets();
numeros[1] = gets();
numeros[2] = gets();
numeros[3] = gets();
numeros[4] = gets();
numeros[5] = gets();

positivos = numeros.filter(value => value > 0);
console.log(positivos.length + " valores positivos");


// Desafio
// Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

// Entrada
// Você receberá 5 valores inteiros.

// Saída
// Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 
// Exemplo de Entrada	Exemplo de Saída
// -5
// 0
// -3
// -4
// 12

// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)


numeros = Array(5);

numeros[0] = gets();
numeros[1] = gets();
numeros[2] = gets();
numeros[3] = gets();
numeros[4] = gets();

pares = numeros.filter(value => value % 2 == 0);
impares = numeros.filter(value => value % 2 != 0);

positivos = numeros.filter(value => value > 0);
negativos = numeros.filter(value => value < 0);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");
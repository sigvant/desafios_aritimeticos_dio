// Desafio
// Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).

// Entrada
// Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.

// Saída
// Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

 
// Exemplo de Entrada	Exemplo de Saída
// 500
// 35.0

// 14.286 km/l

// 2254
// 124.4

// 18.119 km/l

// 4554
// 464.6

// 9.802 km/l

// dist = gets();
// consumo = gets();

// avg = dist / consumo;

// console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(avg) + " km/l");

let X = parseInt(gets());
let Y = parseFloat(gets());

let avg_consumo = parseFloat(X / Y).toFixed(3);

console.log(avg_consumo + " km/l");
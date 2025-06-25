function assertEquals(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(`❌ Falhou: ${message} - Esperado: ${expected}, Recebido: ${actual}`);
  }
  console.log(`✌🏻 Passou: ${message}`);
}

// Funções
function soma(a, b) {
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function par(numero) {
  return numero % 2 === 0;
}

function inverterString(texto) {
  return texto.split('').reverse().join('');
}

function contarVogais(texto) {
  return (texto.match(/[aeiouAEIOU]/gi) || []).length;
} 

// Testes

// Soma
assertEquals(soma(0, 0), 0, 'Teste de soma 0 + 0');
assertEquals(soma(-2, -2), -4, 'Soma de números negativos');

// Multiplicação
assertEquals(multiplica(2, 3), 6, 'Multiplicação 2 x 3');
assertEquals(multiplica(5, 5), 25, 'Multiplicação de 5 x 5');

// Verificar se é par
assertEquals(par(2), true, 'Número 2 é par');
assertEquals(par(9), false, 'Número 9 é ímpar');

// Inverter string
assertEquals(inverterString('hello'), 'olleh', 'Inverter "hello"');
assertEquals(inverterString('apple'), 'elppa', 'Inverter "Apple"');


// Contar vogais
assertEquals(contarVogais('Paralelepípedo'), 6, 'Contar vogais em "Paralelepípedo."');
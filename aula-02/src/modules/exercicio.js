// 1 - Encontrar o volume de um cubo:
// O que faremos primeiro? - A Função que encontra o volume do cubo.

function volumeCubo(lado) {
  const volume = lado * lado * lado;
  return volume;
};

console.log(volumeCubo(2));
console.log(volumeCubo(5));



// 2 - Feedback para alunos sobre notas:
// O que faremos? - A Função que define a nota que falta para o aluno ser aprovado?

function notaAprovacao(notaAtual, mediaNecessaria = 7.0) {
  const falta = mediaNecessaria - notaAtual;
  return falta > 0 ? parseFloat(falta.toFixed(2)) : 0;
}

console.log(notaAprovacao(5));      // Esperado: 2
console.log(notaAprovacao(6.9));    // Esperado: 0.1
console.log(notaAprovacao(7));      // Esperado: 0
console.log(notaAprovacao(8.5));    // Esperado: 0


// Calculadora Básica - adição e subtração: 
// O que fazer primeiro? - A função que define a soma. - A função que define a subtração.

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

console.log(soma(2, 3));       // Esperado: 5
console.log(soma(-1, 1));      // Esperado: 0
console.log(soma(0, 0));       // Esperado: 0

console.log(subtracao(5, 3));      // Esperado: 2
console.log(subtracao(3, 5));      // Esperado: -2
console.log(subtracao(-1, -1));    // Esperado: 0

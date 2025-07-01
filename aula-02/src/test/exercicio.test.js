// Testes: 

// - Calcula o volume corretamente para valores inteiros e reais?
// - Exibe uma mensagem de erro se o valor for 0 ou negativo?
// - Exibe uma mensagem de erro se o parâmetro não for um valor inteiro ou real?


const volumeCubo = require('../modules/exercicio');

describe('volumeDoCubo', () => {
  test('calcula o volume corretamente para números inteiros', () => {
    expect(volumeCubo(3)).toBe(27);
  });

  test('calcula o volume corretamente para números reais', () => {
    expect(volumeCubo(2.5)).toBe(15.625);
  });

  test('lança erro se o valor for 0', () => {
    expect(() => volumeCubo(0)).toBe('O valor deve ser maior que zero.');
  });

  test('lança erro se o valor for negativo', () => {
    expect(() => volumeCubo(-4)).toBe('O valor deve ser maior que zero.');
  });

  test('lança erro se o parâmetro não for um número (string)', () => {
    expect(() => volumeCubo("abc")).toBe('O parâmetro deve ser um número.');
  });

  test('lança erro se o parâmetro não for um número (boolean)', () => {
    expect(() => volumeCubo(true)).toBe('O parâmetro deve ser um número.');
  });
});


// 2 - Aplicando alguns valores de teste (ao menos 3), o valor está correto?

describe('notaParaAprovacao', () => {
  test('retorna o valor correto que falta para aprovação', () => {
    expect(notaParaAprovacao(5)).toBe(2);
  });

  test('retorna valor com casa decimal se necessário', () => {
    expect(notaParaAprovacao(6.9)).toBe(0.1);
  });

  test('retorna 0 quando o aluno já está aprovado com nota igual à média', () => {
    expect(notaParaAprovacao(7)).toBe(0);
  });

  test('retorna 0 quando a nota do aluno é maior que a média', () => {
    expect(notaParaAprovacao(9)).toBe(0);
  });

  test('lança erro se a nota for negativa', () => {
    expect(() => notaParaAprovacao(-2)).toThrow('A nota deve estar entre 0 e 10.');
  });

  test('lança erro se a nota for maior que 10', () => {
    expect(() => notaParaAprovacao(11)).toThrow('A nota deve estar entre 0 e 10.');
  });

});


// 3 - Aplicando alguns valores de teste, o valor está correto?

describe('soma', () => {
  test('soma dois números positivos corretamente', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('soma número positivo e negativo corretamente', () => {
    expect(soma(-1, 4)).toBe(3);
  });

  test('soma dois zeros corretamente', () => {
    expect(soma(0, 0)).toBe(0);
  });
});

describe('subtracao', () => {
  test('subtrai dois números positivos corretamente', () => {
    expect(subtracao(5, 2)).toBe(3);
  });

  test('subtrai número maior de menor corretamente (resultado negativo)', () => {
    expect(subtracao(2, 5)).toBe(-3);
  });

  test('subtrai número negativo de positivo', () => {
    expect(subtracao(3, -2)).toBe(5);
  });
});

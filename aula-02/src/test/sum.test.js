const sum = require('../modules/sum');

describe('Testes básicos da função soma', () => {
  test('Verificar a soma de números positivos', () => {
    expect(sum(8,8)).tobe(16);
  });
  test('Verificar a soma de números negativos', () => {
    expect(sum(-8,8)).toBe(0);
  });
  test('Verificara soma de números com texto', () => {
    expect(sum(-8,"8")).toBe("Erro. Não é possível realizar a soma.");
  });
});




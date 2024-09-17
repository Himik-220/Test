import { MathBase } from '../src/sqrt';

describe('MathBase.solveQuadraticEquation', () => {

  test('Должен вернуть два действительных корня, если дискриминант положительный', () => {
    const result = MathBase.solveQuadraticEquation(1, -3, 2); // Уравнение: x^2 - 3x + 2 = 0
    expect(result.x1).toBe(2); // Корни: x1 = 2
    expect(result.x2).toBe(1); // Корни: x2 = 1
  });

  test('Должен вернуть null для обоих корней, если любой аргумент не является числом', () => {
    const result = MathBase.solveQuadraticEquation(NaN, 6, 7);
    expect(result.x1).toBeNull();
    expect(result.x2).toBeNull();
  });

  test('Должен вернуть null для обоих корней, если дискриминант отрицательный', () => {
    const result = MathBase.solveQuadraticEquation(1, 2, 3); // Уравнение: x^2 + 2x + 3 = 0
    expect(result.x1).toBeNull(); // Корней нет, так как дискриминант отрицательный
    expect(result.x2).toBeNull();
  });

  test('Должен вернуть один действительный корень, если дискриминант равен нулю', () => {
    const result = MathBase.solveQuadraticEquation(1, -4, 4); // Уравнение: x^2 - 4x + 4 = 0
    expect(result.x1).toBe(2); // Единственный корень: x1 = 2
    expect(result.x2).toBeNull(); // Второго корня нет
  });
});

// Leonid Romanov done test
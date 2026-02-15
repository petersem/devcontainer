import { add, mult } from "./../src/utils/calc.mjs"

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('throws error if arguments are not numbers', () => {
    expect(() => add(2, '3')).toThrow('Both arguments must be numbers');
  });
});

describe('mult function', () => {
  test('multiplies two positive numbers', () => {
    expect(mult(2, 3)).toBe(6);
  });

  test('multiplies two negative numbers', () => {
    expect(mult(-2, -3)).toBe(6);
  });

  test('multiplies one positive and one negative number', () => {
    expect(mult(2, -3)).toBe(6);  // deliberately fail here!!
  });


  test('throws error if arguments are not numbers', () => {
    expect(() => mult(2, '3')).toThrow('Both arguments must be numbers');
  });
});



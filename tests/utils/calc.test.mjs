import { add, mult, sub } from "./../../src/utils/calc.mjs"

let y = 0;

beforeAll(() => {
    y = 9;
});

afterAll(() => {
    y = 0;
});

describe('Setup before testing', () => {
    test('did setup run', () => {
        expect(y).toBe(9);
    });
});


let x = 0; 
// Test pre jobs
beforeEach(() => {
  x =5;
});

// test post jobs
afterEach(() => {
  x = 0;
});

describe('add function', () => {
  test('did pre-test init run', () => {
    expect(x).toBe(5);  // test if pre init ran
  });

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
    expect(mult(2, -3)).toBe(-6);
  });

  test('throws error if arguments are not numbers', () => {
    expect(() => sub(2, '3')).toThrow('Both arguments must be numbers');
  });

});


describe('sub function', () => {
  test('subtracts two positive numbers', () => {
    expect(sub(2, 3)).toBe(-1);
  });

  test('subtracts two negative numbers', () => {
    expect(sub(-2, -3)).toBe(1);
  });

  test('subtracts one positive and one negative number', () => {
    expect(sub(2, -3)).toBe(5);
  });


  test('throws error if arguments are not numbers', () => {
    expect(() => sub(2, '3')).toThrow('Both arguments must be numbers');
  });
});

describe('divide function', () => {
  test('subtracts two positive numbers', () => {
    expect(sub(2, 3)).toBe(-1);
  });
});


import { add, mult, sub } from "../../src/utils/calc.mjs"

let y = 0;

beforeAll(() => {
    y = 9;
});

afterAll(() => {
    y = 0;
});

describe('Setup before testing - int', () => {
    test('did setup run', () => {
        expect(y).toBe(9);
    });
});


const {
    test,
    expect
} = require('@jest/globals');
const stringLength = require('./Tasks/stringLength.js');
const reverseString = require('./Tasks/reverseString.js');
const Calculator = require('./Tasks/Calculator.js');
const capitalize = require('./Tasks/capitalize.js');

test('Hamza name have 5 charachters', () => {
    const strLength = stringLength('hamza');
    expect(strLength).toBe(5);
    expect(strLength).not.toBe(11);
    expect(strLength).not.toBe(0);
})

test('the reverse of Hamza is azmah :/', () => {
    let str = 'hamza';
    const reverseStr = reverseString(str);
    expect(reverseStr).toBe('azmah');
    expect(reverseStr).not.toBe('hamza');
})

describe('My calculator test', () => {
    const calculator = new Calculator()
    describe('add two numbers', () => {
        test('6 add to 3 is 9', () => {
            const add1 = calculator.add(3, 6);
            expect(add1).toBe(9);
            expect(add1).toBeCloseTo(9);
        });

        test('0.1 add to 4.1 is 4.2', () => {
            const add2 = calculator.add(0.1, 4.1);
            expect(add2).toBeCloseTo(4.2);
        });

        test('-2 add to 3 is 1', () => {
            const add3 = calculator.add(-2, 3);
            expect(add3).toBe(1);
            expect(add3).toBeCloseTo(1);
        });
    });

    describe('substract two numbers', () => {
        test('6 substract to 3 is 3', () => {
            const substract1 = calculator.substract(6, 3);
            expect(substract1).toBe(3);
            expect(substract1).toBeCloseTo(3);
        });

        test('-2 substract to 4 is -6', () => {
            const substract2 = calculator.substract(-2, 4);
            expect(substract2).toBe(-6);
            expect(substract2).toBeCloseTo(-6);
        });

        test('-2 substract to -3 is 1', () => {
            const substract3 = calculator.substract(-2, -3);
            expect(substract3).toBe(1);
            expect(substract3).toBeCloseTo(1);
        });
    });

    describe('multiplication of two numbers', () => {
        test('multiply 4 by 0', () => {
            const multiply1 = calculator.multiply(4,0);
            expect(multiply1).toBe(0);
        });
    
        test('multiply 1 by -1', () => {
            expect(calculator.multiply(1,-1)).toBe(-1);
        });
    
        test('multiply -1 by -2', () => {
            expect(calculator.multiply(-1,-2)).toBe(2);
        });
    });

    describe('division of two numbers', () => {
        test('divide 4 by 0', () => {
            expect(() => calculator.divide(1, 0)).toThrow();
        });
    
        test('divide 0 by 1', () => {
            expect(calculator.divide(0,1)).toBe(0);
        });
    
        test('divide 10 by 2', () => {
            expect(calculator.divide(10,2)).toBe(5);
        });
    });
});

test('capitalize hamza to be Hamza', () => {
    expect(capitalize('hamza')).toBe('Hamza');
});

test('Only accept a string', () => {
    expect(() => capitalize('')).toThrow();
});
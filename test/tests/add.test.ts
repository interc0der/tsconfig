import {add} from '../src/index'

describe('testing add', () => {
    test('add', () => {
        const result = add('1, 2, 4, 5');
        expect(result).toBe(12);
    });

});

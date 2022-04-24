import {myClass} from '../src/index'

describe('testing class', () => {
    test('printWidth', () => {
        const x = new myClass(100, 500)
      expect(x.printWidth(100)).toBe(100);
    });

    test('printHeight', () => {
      const x = new myClass(100, 500)
      expect(x.printHeight("200")).toBe("200");
  });
});

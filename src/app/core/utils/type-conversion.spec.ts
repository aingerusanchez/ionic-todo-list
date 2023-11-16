import { isNumber, toNumber, toBoolean } from './type-conversion';


describe('TypeConversion', () => {

  describe('toNumber:', () => {

    // ---------- HAPPY PATHS ----------
    it('a number, should return number', () => {
      const abc = toNumber(123);
      debugger
      expect(toNumber(123)).toEqual(123);
    });

    it('a numeric string, should return the correct number', () => {
      expect(toNumber('123')).toEqual(123);
    });

    // ---------- EDGE CASES ----------
    it('a non-numeric string, should throw error', () => {
      expect(() => toNumber('abc')).toThrowError('Can`t parse value to number');
    });

    it('an empty string, should throw error', () => {
      expect(() => toNumber('')).toThrowError('Can`t parse value to number');
    });

    it('null input, should throw error', () => {
      expect(() => toNumber(null)).toThrowError('Can`t parse value to number');
    });

    it('undefined input, should throw error', () => {
      expect(() => toNumber(undefined)).toThrowError('Can`t parse value to number');
    });
  });

  describe('isNumber:', () => {

    // ---------- HAPPY PATHS ----------
    it('a number, should return true', () => {
      expect(isNumber(123)).toBeTrue();
    });

    it('a numeric string, should return true', () => {
      expect(isNumber('123')).toBeTrue();
    });

    // ---------- EDGE CASES ----------
    it('a non-numeric string, should return false', () => {
      expect(isNumber('abc')).toBeFalse();
    });

    it('an empty string, should return false', () => {
      expect(isNumber('')).toBeFalse();
    });
  });

  describe('toBoolean:', () => {

    // ---------- HAPPY PATHS ----------
    it('a boolean type, should return boolean value', () => {
      expect(toBoolean(true)).toBeTrue();
    });

    it('a string with a boolean type, should return boolean value', () => {
      expect(toBoolean("true")).toBeTrue();
    });

    // ---------- EDGE CASES ----------
    it('an empty string, should return false', () => {
      expect(toBoolean("")).toBeFalse();
    });

    it('a non-boolean string value, should return false', () => {
      expect(toBoolean("word")).toBeFalse();
    });

    it('a null value, should return false', () => {
      expect(toBoolean(null)).toBeFalse();
    });
  });

});

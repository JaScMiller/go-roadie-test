import { getXFibonacciNumbers } from "./fibonacci";

describe("fibonacci", () => {
  describe("getXFibonacciNumbers", () => {
    it("should error when negative number is used", () => {
      expect(() => getXFibonacciNumbers(-1)).toThrowError();
    });

    it("should error when NaN is used", () => {
      expect(() => getXFibonacciNumbers(NaN)).toThrowError();
    });

    it("should successfully return 0 numbers", () => {
      const answer = getXFibonacciNumbers(0);
      expect(answer.length).toBe(0);
    });

    it("should successfully return 7 numbers", () => {
      const answer = getXFibonacciNumbers(7);
      expect(answer.length).toBe(7);
      for (let i = 0; i < answer.length; i++) {
        const real = answer[i];
        const expected = [0, 1, 1, 2, 3, 5, 8][i];
        expect(real).toBe(expected);
      }
    });

    it("should successfully run for a large number", () => {
      // Recursive solutions can cause problems here
      const answer = getXFibonacciNumbers(10000);
      expect(answer.length).toBe(10000);
    });
  });
});

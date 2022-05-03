import { parseNumberString } from "./input-output";

describe("input-output", () => {
  describe("parseNumberString", () => {
    it("should parse a number", () => {
      expect(parseNumberString("5")).toBe(5);
    });

    it("should trim and parse a number", () => {
      expect(parseNumberString("  4  ")).toBe(4);
    });

    it("should parse a negative decimal", () => {
      expect(parseNumberString("  -43.3  ")).toBe(-43.3);
    });

    it("should not parse NaN", () => {
      expect(parseNumberString("NaN")).toBeUndefined();
    });
  });
});

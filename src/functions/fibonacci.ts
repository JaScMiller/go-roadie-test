/**
 * Gets x fibonacci numbers
 * The 1st fibonacci number, fib(1), is defined as 0
 * The 2nd fibonacci number, fib(2) is defined as 1
 * From there fib(x) = fib(x - 1) + fib(x - 2)
 * https://www.mathsisfun.com/numbers/fibonacci-sequence.html
 * @param x The amount of fibonacci numbers to return
 * @returns An array of the first x fibonacci numbers, with the smallest at index 0
 */
export function getXFibonacciNumbers(x: number): Array<number> {
  if (isNaN(x) || x < 0 || Math.round(x) !== x) {
    throw new Error(`Tried to get ${x} fibonacci numbers.`);
  }

  const sequence: Array<number> = [];

  for (let index = 0; index < x; index++) {
    if (index === 0) {
      sequence.push(0);
    } else if (index === 1) {
      sequence.push(1);
    } else {
      sequence.push(
        sequence[sequence.length - 1] + sequence[sequence.length - 2]
      );
    }
  }

  return sequence;
}

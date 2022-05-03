import { getXFibonacciNumbers } from "./functions/fibonacci";
import { readNumberFromInput, stopIO } from "./functions/input-output";

(async () => {
  const sequenceLength = await readNumberFromInput(
    "Enter how many fibonacci numbers you would like?\n"
  );
  console.log("\n");

  if (
    sequenceLength === undefined ||
    sequenceLength < 0 ||
    isNaN(sequenceLength)
  ) {
    console.log(`Invalid input, please enter a number`);
  } else {
    const sequence = getXFibonacciNumbers(sequenceLength);
    console.log(sequence.join(", "));
  }

  stopIO();
})();

import { getXFibonacciNumbers } from "./functions/fibonacci";
import { readNumberFromInput } from "./functions/input-output";

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
    console.log(`Unable to parse ${sequenceLength}, please enter a number`);
    return;
  }

  const sequence = getXFibonacciNumbers(sequenceLength);
  console.log(sequence.join(", "));
})();

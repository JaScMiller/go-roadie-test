import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });

/**
 * Must be called to close down the io and shut the program down when finished
 */
export function stopIO(): void {
  rl.close();
}

/**
 * Prompt the user for a number
 * Returns a promise as the user may take time to respond
 * If this function is used, remember to close the io stream using stopIO()
 * @param question The prompt presented to the user
 * @returns a number if parsing was successful, undefined otherwise
 */
export function readNumberFromInput(
  question: string
): Promise<number | undefined> {
  const output = new Promise<number | undefined>((res, _rej) => {
    rl.question(question, (answer) => {
      res(parseNumberString(answer));
    });
  });
  return output;
}

/**
 * Parses input text (e.g. from a console) into a number
 * Will remove NaN as a possible input
 * @param text the input string
 * @returns a number if parsing was successful, undefined otherwise
 */
export function parseNumberString(text: string): number | undefined {
  try {
    const output = parseFloat(text.trim());

    if (isNaN(output)) {
      return undefined;
    }

    return output;
  } catch {
    return undefined;
  }
}

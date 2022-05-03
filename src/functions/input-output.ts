/**
 * Prompt the user for a number
 * Returns a promise as the user may take time to respond
 * @param question The prompt presented to the user
 * @returns a number if parsing was successful, undefined otherwise
 */
export function readNumberFromInput(
  question: string
): Promise<number | undefined> {
  throw new Error("Not yet implemented");
}

/**
 * Parses input text (e.g. from a console) into a number
 * @param text the input string
 * @returns a number if parsing was successful, undefined otherwise
 */
export function parseNumberString(text: string): number | undefined {
  throw new Error("Not yet implemented");
}

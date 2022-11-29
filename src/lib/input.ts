import fs from "fs";

/**
 * @param path - input file name eg. "01.txt"
 */
export function loadInput(path: string) {
  try {
    const data = fs.readFileSync(`inputs/${path}`, { encoding: "utf-8" });
    return data;
  } catch {
    console.error(`Error reading input file ${path}, make sure it exists in /inputs`);
    process.exit(1);
  }
}

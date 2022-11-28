import fs from "fs";

export function loadInput(path: string) {
  try {
    const data = fs.readFileSync(`inputs/${path}`, { encoding: "utf-8" });
    return data;
  } catch {
    console.error(`--> Error reading input file ${path}`);
    process.exit(1);
  }
}

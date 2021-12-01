import fs from "fs/promises";

export async function loadInput(path: string): Promise<string> {
  const data = await fs.readFile(path, { encoding: "utf-8" });
  return data;
}

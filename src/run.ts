const dayArg = process.argv[2];

if (!dayArg) {
  throw new Error("Please specify a day to run, for example: npm start 01");
}

async function runDay(day: string) {
  try {
    const dayModule = await import(`./solutions/${day}`);
    dayModule.default();
  } catch {
    throw new Error(`File doesn't exist, make sure you create ${day}.ts in /src/solutions`);
  }
}

runDay(dayArg);

const dayArg = process.argv[2];

if (!dayArg) {
  console.error("Please specify a day to run, for example: npm start 01");
  process.exit(1);
}

async function runDay(day: string) {
  try {
    const dayModule = await import(`./solutions/${day}`);
    dayModule.default();
  } catch {
    console.error(`File doesn't exist, make sure you create ${day}.ts in /src/solutions`);
    process.exit(1);
  }
}

runDay(dayArg);

import { loadInput } from "../lib/input";

function part_one() {
  console.log("hello day 01 part 1");
}

function part_two() {
  console.log("hello day 01 part 2");
}

// always define a default export fn, this will be run when you run `npm start <dayNumber>`
export default function () {
  // loading input file as string
  const input = loadInput("01.txt");

  console.log("reading input file: ", input);

  part_one();
  part_two();
}

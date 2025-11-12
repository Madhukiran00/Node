import { add, sub, mul } from "./math.js";
import chalk from "chalk";
import fs from "fs";

const num1 = 10;
const num2 = 5;

const result = [
  `add: ${add(num1, num2)}`,
  `sub: ${sub(num1, num2)}`,
  `mul: ${mul(num1, num2)}`
];

console.log(chalk.green("Arithmetic Operations:"));
result.forEach((res) => console.log(chalk.blue(res)));

result.forEach((res) => {
  fs.appendFileSync("history.txt", res + "\n", "utf-8");
});

console.log(chalk.yellow("\n Results saved"));

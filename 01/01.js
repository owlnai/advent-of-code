import { createReadStream } from "fs";
import { createInterface } from "readline";

let numbers = [];

createInterface({
  input: createReadStream("01.txt"),
  output: process.stdout,
  terminal: false,
})
  .on("line", (line) => numbers.push(parseInt(line)))
  .on("close", () => {
    for (let firstNumber of numbers) {
      for (let secondNumber of numbers) {
        if (firstNumber + secondNumber == 2020) {
          return console.log(firstNumber * secondNumber); // 
        }
      }
    }
  });

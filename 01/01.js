import "fs";
import "fs";
import { createReadStream } from "fs";
import "readline";
import { createInterface } from "readline";

let numbers = [];

createInterface({
  input: createReadStream("01.txt"),
  output: process.stdout,
  terminal: false,
})
  .on("line", function (number) {
    numbers.push(parseInt(number));
  })
  .on("close", () => {
    for (const firstNumber of numbers) {
      for (const secondNumber of numbers) {
        if (firstNumber + secondNumber == 2020) {
          return console.log(firstNumber * secondNumber);
        }
      }
    }
  });

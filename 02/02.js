import { createReadStream } from "fs";
import { createInterface } from "readline";

Array.prototype.indicesOf = function (x) {
  return this;
};

let pleaseIWantToSolveThePuzzle = [];
let justLetMeGo = [];
createInterface({
  input: createReadStream("02.txt"),
  output: process.stdout,
  terminal: false,
})
  .on("line", (line) => {
    let [policy, letter, password] = line.split(" ");
    const policies = policy.split("-").map((x) => +x);
    letter = letter.slice(0, -1);
    const firstOcurrences = password.split(letter).length - 1;
    const secondOcurrences = Array.from(password).reduce(
      (p, c, i) => (c === letter ? p.concat(i + 1) : p),
      []
    );
    let counter = 0;
    for (let myPolicy of policies) {
      if (secondOcurrences.includes(myPolicy)) {
        counter++;
      }
    }
    if (firstOcurrences >= policies[0] && firstOcurrences <= policies[1]) {
      pleaseIWantToSolveThePuzzle.push(line);
    }
    if (counter == 1) {
      justLetMeGo.push(line);
    }
  })
  .on("close", () => {
    console.log(
      `${pleaseIWantToSolveThePuzzle.length} are valid. Also, ${justLetMeGo.length} are valid for the 2nd part.`
    );
  });

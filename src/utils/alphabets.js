import { mathFloor } from "./mathFloor.js";

export const drawA = (n) => {
  console.log('called A');
  let out = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n * 2; j++) {
      if (j === ((n - 1) * 2) / 2 + i || j === ((n - 1) * 2) / 2 - i) {
        out += "*";
      } else if (i === mathFloor(n, 1, 0, 2) && j < mathFloor(n, 1, 2, 2) + i && j > Math.floor((n - 1) * 2) / 2 - i) {
        out += "*";
      } else {
        out += " ";
      }
    }
    out += "\n";
  }
  console.log(out);
  return out;
};

export const drawB = (n) => {
  console.log("called B");
  let out = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === mathFloor(n, 1, 0, 2) || i === n - 1 || j === 0) {
        out += "*";
      } else if (j === n - 1 && j !== mathFloor(n, 1, 0, 2)) {
        out += "*";
      } else {
        out += " ";
      }
    }
    out += "\n";
  }
  console.log(out);
  return out;
};

// drawA(10);
// drawB(10);

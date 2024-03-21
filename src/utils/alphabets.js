export const drawA = (n) => {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n * 2; j++) {
      if (j === ((n - 1) * 2) / 2 + i || j === ((n - 1) * 2) / 2 - i) {
        a += "*";
      } else if (i === Math.floor((n - 1) / 2) && j < Math.floor((n - 1) * 2) / 2 + i && j > Math.floor((n - 1) * 2) / 2 - i) {
        a += "*";
      } else {
        a += " ";
      }
    }
    a += "\n";
  }
  return a;
};


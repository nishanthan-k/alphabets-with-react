import { drawA, drawB } from "./alphabets";

const callAlphabetFunc = (n) => {
  switch (n) {
    case 0:
      return drawA(10);
    case 1:
      return drawB(10);
  }
};

export const getAlphabet = (alphabet) => {
  let a = alphabet.toLowerCase().charCodeAt(0);
  return callAlphabetFunc(a % 97);
};

function transformToRot13(encrypted_word) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let word = "";

  for (let i = 0; i < encrypted_word.length; i++) {
    let letter = encrypted_word[i];
    if (letter === " ") {
      word += " ";
      continue;
    }
    let index = alphabet.indexOf(letter.toLowerCase()) - 13;
    if (index < 0) {
      index = alphabet.length + index;
    }
    word += alphabet[index];
  }

  console.log(word);

  return word.toUpperCase();
}

console.log(transformToRot13("URYYB JBEYQ") === "HELLO WORLD");
console.log(transformToRot13("BCRAPYNFFEBBZF") === "OPENCLASSROOMS");
console.log(transformToRot13("PRPV RFG ZBA PBQR FRPERG") === "CECI EST MON CODE SECRET");

function parse_to_roman(n) {
  let int_roman = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = [];

  for (let i = 0; i < int_roman.length; i++) {
    while (n >= int_roman[i][0]) {
      n -= int_roman[i][0];
      result += int_roman[i][1];
    }
  }
  console.log(result);

  return result;
}

parse_to_roman(25);

console.log(parse_to_roman(4) === "IV");
console.log(parse_to_roman(37) === "XXXVII");
console.log(parse_to_roman(143) === "CXLIII");
console.log(parse_to_roman(1234) === "MCCXXXIV");

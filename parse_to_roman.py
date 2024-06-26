def parse_to_roman(n: int):
    int_roman = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    }

    roman = []

    for i in int_roman:
        while n >= i:
            n -= i
            roman.append(int_roman[i])

    roman = "".join(roman)
    print(roman)

    return roman


assert parse_to_roman(4) == "IV"
assert parse_to_roman(37) == "XXXVII"
assert parse_to_roman(143) == "CXLIII"
assert parse_to_roman(1234) == "MCCXXXIV"

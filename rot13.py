# function transformToRot13(stringToTransform) {
# }

# toRot13('c'); // HELLO WORLD
# toRot13('BCRAPYNFFEBBZF'); // OPENCLASSROOMS
# toRot13('PRPV RFG ZBA PBQR FRPERG'); // CECI EST MON CODE SECRET


def transformToRot13(encrypted_word: str):
    alphabet = [
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
    ]
    word = ""

    for letter in encrypted_word.lower():
        if letter == " ":
            word += " "
            continue
        word += alphabet[alphabet.index(letter) - 13]

    print(word)

    return word.upper()


assert transformToRot13("URYYB JBEYQ") == "HELLO WORLD"
assert transformToRot13("BCRAPYNFFEBBZF") == "OPENCLASSROOMS"
assert transformToRot13("PRPV RFG ZBA PBQR FRPERG") == "CECI EST MON CODE SECRET"

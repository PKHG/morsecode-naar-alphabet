input.onButtonPressed(Button.A, function () {
    basic.showNumber(StringAenB.length)
    basic.clearScreen()
    if (StringAenB.length >= 5) {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.showString("overnieuw!")
        StringA = "."
        StringB = "-"
        StringAenB = ""
        tellerAenB = 0
        tellerA = 0
        tellerB = 0
        basic.pause(1000)
    } else {
        tellerAenB = tellerAenB + 1
        tellerA = tellerA + 1
        StringAenB = "" + StringAenB + "."
        basic.showString(StringAenB)
        basic.showNumber(tellerAenB)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString(StringAenB)
    basic.showNumber(tellerAenB)
})
input.onButtonPressed(Button.AB, function () {
    let waarMorse: number;
try {
        waarMorse = _py.py_array_index(morse, StringAenB)
        waarAlphabet = alphabet[waarMorse]
        basic.clearScreen()
        basic.showString(StringAenB)
        basic.showIcon(IconNames.Heart)
        basic.showNumber(tellerAenB)
        basic.showString("" + waarAlphabet)
        StringAenB = ""
        tellerAenB = 0
        tellerA = 0
        tellerB = 0
    }
    catch (_) {
        basic.showIcon(IconNames.Sad)
        StringAenB = ""
        tellerAenB = 0
        tellerA = 0
        tellerB = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(StringAenB.length)
    basic.clearScreen()
    if (StringAenB.length >= 5) {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.showString("overnieuw!")
        StringA = "."
        StringB = "-"
        StringAenB = ""
        basic.pause(1000)
    } else {
        tellerAenB = tellerAenB + 1
        tellerB = tellerB + 1
        StringAenB = "" + StringAenB + "-"
        basic.showString(StringAenB)
        basic.showNumber(tellerAenB)
    }
})
let StringB = ""
let StringA = ""
let waarAlphabet = ""
let tellerAenB = 0
let alphabet : string[] = []
let tellerA = 0
let tellerB = 0
let StringAenB = ""
let morse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--..",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"----.",
"-----"
]
alphabet = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"
]

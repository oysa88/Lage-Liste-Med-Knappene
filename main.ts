input.onButtonPressed(Button.A, function () {
    tall += 1
    basic.showNumber(tall)
})
input.onGesture(Gesture.Shake, function () {
    for (let indeks = 0; indeks <= tabell.length - 1; indeks++) {
        radio.sendValue("spill", tabell[indeks])
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(tabell.length)
})
input.onButtonPressed(Button.B, function () {
    tabell.push(tall)
    tall = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "spill") {
        basic.showNumber(value)
        basic.pause(200)
        basic.clearScreen()
    }
})
let tall = 0
let tabell: number[] = []
tabell = []
tall = 0

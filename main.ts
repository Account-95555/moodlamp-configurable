let R = 0
let G = 0
let B = 0
let OFF = 0
let strip: neopixel.Strip = null
basic.forever(function () {
    R = randint(0, 255)
    G = randint(0, 255)
    B = randint(0, 255)
    OFF = 0
    while (OFF == 0) {
        if (input.buttonIsPressed(Button.A)) {
            R = randint(0, 255)
            G = randint(0, 255)
            B = randint(0, 255)
            strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
            strip.showColor(neopixel.rgb(R, G, B))
        }
        if (input.buttonIsPressed(Button.B)) {
            OFF = 1
        }
    }
    strip.show()
    strip.shift(1)
    strip.clear()
})

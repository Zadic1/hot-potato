input.onButtonPressed(Button.A, function () {
    strip.clear()
    range3.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.clear()
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.clear()
    random_number = randint(5, 15)
    while (random_number > 0) {
        basic.clearScreen()
        basic.pause(1000)
        random_number += -1
        basic.showIcon(IconNames.Heart)
    }
    if (random_number == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
    }
})
let random_number = 0
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
range = strip.range(11, 14)
range2 = strip.range(6, 11)
range3 = strip.range(0, 6)
strip.showColor(neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))

input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # # .
        . # . . .
        . . # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
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
basic.showString("hey man")
basic.forever(function () {
	
})

input.onButtonPressed(Button.A, function () {
    if (HOURMINUTESECOND == 0) {
        if (Seconds <= 60 && Seconds > 0) {
            Seconds += -1
        }
    }
    if (HOURMINUTESECOND == 1) {
        if (Minutes <= 60 && Minutes > 0) {
            Minutes += -1
        }
    }
    if (HOURMINUTESECOND == 2) {
        if (Hours <= 24 && Hours > 0) {
            Hours += -1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (HOURMINUTESECOND < 3) {
        basic.clearScreen()
        HOURMINUTESECOND += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (HOURMINUTESECOND == 0) {
        if (Seconds < 60 && Seconds >= 0) {
            Seconds += 1
        }
    }
    if (HOURMINUTESECOND == 1) {
        if (Minutes < 60 && Minutes >= 0) {
            Minutes += 1
        }
    }
    if (HOURMINUTESECOND == 2) {
        if (Hours < 24 && Hours >= 0) {
            Hours += 1
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Timer = 1
    if (Timer == 1) {
        basic.clearScreen()
        HOURMINUTESECOND = 3
        game.startCountdown((Hours * 60 * 60 + Minutes * 60 + Seconds) * 1000)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . . # #
            . # # # .
            `)
    }
})
let Timer = 0
let Hours = 0
let Minutes = 0
let Seconds = 0
let HOURMINUTESECOND = 0
HOURMINUTESECOND = 0
Seconds = 0
Minutes = 0
Hours = 0
Timer = 0
basic.forever(function () {
    if (HOURMINUTESECOND == 0) {
        basic.showString("" + Seconds + "secs")
    }
    if (HOURMINUTESECOND == 1) {
        basic.showString("" + Minutes + "mins")
    }
    if (HOURMINUTESECOND == 2) {
        basic.showString("" + Hours + "hrs")
    }
    if (game.isGameOver()) {
        music.ringTone(262)
        HOURMINUTESECOND = 0
        Seconds = 0
        Minutes = 0
        Hours = 0
        Timer = 0
        control.waitMicros(5000000)
        music.stopAllSounds()
        basic.clearScreen()
    }
})

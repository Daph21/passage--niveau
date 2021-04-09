input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (input.lightLevel() < 140) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
})
basic.forever(function () {
    while (input.lightLevel() < 140) {
        music.playTone(622, music.beat(BeatFraction.Quarter))
        pins.servoWritePin(AnalogPin.P0, 68)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(300)
    }
    pins.servoWritePin(AnalogPin.P0, 180)
})

pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    t1 = input.runningTimeMicros() / 1000000
    d1 = Fente / 6 * 9.6 / 100
    Vitesse = Math.abs(d2 - d1) / Math.abs(t2 - t1)
    Fente += 1
    t2 = t1
    d2 = d1
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    control.reset()
})
let t2 = 0
let d2 = 0
let Vitesse = 0
let d1 = 0
let t1 = 0
let Fente = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
Fente = 0
t1 = 0
d1 = 0
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + (Vitesse))
})

let right_speed = 0
let left_speed = 0
let rotation = 0
let speed = 0
let range = 0
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let hue = 0
basic.forever(function () {
    strip.showColor(neopixel.hsl(hue, 150, 50))
    hue += 1
})
basic.forever(function () {
    range = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (range < 7) {
        speed = -20
    } else {
        speed = randint(-32, 32)
    }
    rotation = randint(-16, 16)
    left_speed = 1 * (speed + rotation)
    right_speed = 1.2 * (speed - rotation)
    cuteBot.motors(left_speed, right_speed)
    basic.pause(200)
})

let last_range = 0
let right_speed = 0
let left_speed = 0
let speed = 0
let range = 0
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let hue = 0
let range_diff = 0
basic.forever(function () {
    range = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    speed = 18 * Math.atan2(0.5 * (range - 7), 1)
    left_speed = 1 * speed
    right_speed = 1.2 * speed
    cuteBot.motors(left_speed, right_speed)
    if (range < 30) {
        range_diff = (range - last_range) / range
    } else {
        range_diff = 0
    }
    last_range = range
    strip.showColor(neopixel.hsl(hue, 150, 50))
    hue += 1
})

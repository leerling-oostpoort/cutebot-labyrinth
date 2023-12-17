let last_range = 0
let range_diff = 0
let range = 0
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let hue = 0
basic.forever(function () {
    let right_speed = 0
    let left_speed = 0
    range = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    cuteBot.motors(left_speed, right_speed)
    strip.showColor(neopixel.hsl(hue, 150, 50))
    hue += 1
    range_diff = range - last_range
    last_range = range
})

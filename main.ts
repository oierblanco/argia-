basic.forever(function () {
    if (input.lightLevel() > 30) {
        basic.showString("egun on")
    }
})
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        if (input.lightLevel() < 30) {
            basic.showString("agur")
        }
    }
})
basic.forever(function () {
    if (input.lightLevel() > 30) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
})

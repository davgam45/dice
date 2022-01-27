input.onGesture(Gesture.Shake, function () {
    music.ringTone(392)
})
music.ringTone(247)
basic.forever(function () {
    music.playMelody("D E F A B C5 G C ", 129)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
})

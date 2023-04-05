function 加速 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Right,
    255,
    makerobo.Motors.Left,
    255
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Right,
    100,
    makerobo.Motors.Left,
    150
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Right,
    150,
    makerobo.Motors.Left,
    100
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Left,
    -150
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
function 减速 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Right,
    50,
    makerobo.Motors.Left,
    50
    )
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Up) == 1) {
    前进()
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Down) == 1) {
    后退()
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Left) == 1) {
    左转()
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Right) == 1) {
    右转()
}
if (ps2controller.button_pressed(ps2controller.PS2Button.R1) == 1) {
    加速()
}
if (ps2controller.button_pressed(ps2controller.PS2Button.R2) == 1) {
    减速()
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Triangle) == 1) {
    makerobo.MotorStopAll()
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Square) == 1) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Circle) == 1) {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
}
if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1) {
    basic.showString("妈妈好")
}
if (ps2controller.button_pressed(ps2controller.PS2Button.L2) == 1) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
if (ps2controller.button_pressed(ps2controller.PS2Button.Cross) == 1) {
    basic.showString("清明节")
}

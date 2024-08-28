basic.forever(function () {
    // Initialize radio communication
    radio.setGroup(1)
    input.onButtonPressed(Button.A, function () {
        basic.showIcon(IconNames.Happy);
        radio.sendString("Hello");
    });
input.onButtonPressed(Button.B, function () {
        basic.showIcon(IconNames.Sad);
    });
radio.onReceivedString(function (receivedString) {
        basic.showString(receivedString);
    });
// Default behavior: clear the screen when the micro:bit starts
    basic.clearScreen()
})

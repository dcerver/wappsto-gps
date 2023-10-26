input.onButtonPressed(Button.B, function () {
    basic.showNumber(wappsto.longitude())
    basic.showNumber(wappsto.latitude())
    basic.pause(100)
})
wappsto.configureName("GPS Microbit")
wappsto.configureValue(1, "Longitude", WappstoValueTemplate.Longitude)
wappsto.configureValue(2, "Latitude", WappstoValueTemplate.Latitude)
wappsto.configureValue(3, "Temperature", WappstoValueTemplate.Temperature)
wappsto.configureValue(4, "Lightlevel", WappstoValueTemplate.Light)
while (!(wappsto.connected())) {
    basic.showIcon(IconNames.No)
}
basic.clearScreen()
basic.forever(function () {
    wappsto.sendNumberToWappsto(wappsto.longitude(), 1, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(wappsto.latitude(), 2, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(input.temperature(), 3, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(input.lightLevel(), 4, WappstoTransmit.OnChange)
})

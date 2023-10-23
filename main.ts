wappsto.configureName("GPS Microbit")
wappsto.configureValue(1, "Longitude", WappstoValueTemplate.Longitude)
wappsto.configureValue(2, "Latitude", WappstoValueTemplate.Latitude)
basic.forever(function () {
    wappsto.sendNumberToWappsto(wappsto.longitude(), 1, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(wappsto.latitude(), 2, WappstoTransmit.OnChange)
    basic.showNumber(wappsto.longitude())
    basic.showNumber(wappsto.latitude())
    basic.pause(5000)
})

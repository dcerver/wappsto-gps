input.onButtonPressed(Button.A, function () {
    basic.showNumber(wappsto.longitude())
    basic.showNumber(wappsto.latitude())
    basic.pause(100)
})
wappsto.configureName("GPS Microbit")
wappsto.configureValue(1, "Longitude", WappstoValueTemplate.Longitude)
wappsto.configureValue(2, "Latitude", WappstoValueTemplate.Latitude)
wappsto.configureValue(3, "Temperature", WappstoValueTemplate.Temperature)
wappsto.configureNumberValue(
4,
"LightIntensity",
"Light",
0,
100,
1,
"%"
)
wappsto.configureNumberValue(
5,
"Pressure(hPa)",
"Pressure",
300,
1100,
1,
"hPa"
)
wappsto.configureStringValue(16, "Intrussion", "string")
while (!(wappsto.connected())) {
    basic.showIcon(IconNames.No)
}
basic.clearScreen()
basic.forever(function () {
    wappsto.sendNumberToWappsto(wappsto.longitude(), 1, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(wappsto.latitude(), 2, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(input.temperature(), 3, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(Environment.ReadLightIntensity(AnalogPin.P1), 4, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(Environment.octopus_BME280(Environment.BME280_state.BME280_pressure), 5, WappstoTransmit.OnChange)
    if (Environment.PIR(DigitalPin.P0)) {
        wappsto.sendStringToWappsto("Intrussion", 16, WappstoTransmit.OnChange)
        basic.showIcon(IconNames.Happy)
    } else {
        wappsto.sendStringToWappsto("Cleared", 16, WappstoTransmit.OnChange)
        basic.clearScreen()
    }
})

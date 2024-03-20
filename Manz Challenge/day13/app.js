var meter = document.getElementById("entradasVendidas");
var decreaseButton = document.getElementById("decrease");
var increaseButton = document.getElementById("increase");
var valueText = document.getElementById("valueText");

valueText.innerHTML = meter.value;

increaseButton.onclick = function () {
    meter.value++;
    valueText.innerHTML = meter.value;
}

decreaseButton.onclick = function () {
    meter.value--;
    valueText.innerHTML = meter.value;
}
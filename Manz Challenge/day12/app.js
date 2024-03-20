var slider = document.getElementById("sliderId");
var valueText = document.getElementById("valueText");

valueText.innerHTML = slider.value;

slider.oninput = function() {
    valueText.innerHTML = this.value;
}
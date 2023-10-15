function convert() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var conversionOption = document.getElementById("conversionOption").value;
  var resultInput = document.getElementById("result");

  if (!isNaN(temperature)) {
    var result;

    if (conversionOption === "celsiusToFahrenheit") {
      result = (temperature * 9) / 5 + 32;
      resultInput.value = temperature + " Cel = " + result.toFixed(2) + " Fah";
    } else if (conversionOption === "fahrenheitToCelsius") {
      result = ((temperature - 32) * 5) / 9;
      resultInput.value = temperature + " Fah = " + result.toFixed(2) + " Cel";
    } else if (conversionOption === "celsiusToKelvin") {
      result = temperature + 273.15;
      resultInput.value = temperature + " Cel = " + result.toFixed(2) + " Kel";
    } else if (conversionOption === "kelvinToCelsius") {
      result = temperature - 273.15;
      resultInput.value = temperature + " Kel = " + result.toFixed(2) + " Cel";
    } else if (conversionOption === "fahrenheitToKelvin") {
      result = ((temperature - 32) * 5) / 9 + 273.15;
      resultInput.value = temperature + " Fah = " + result.toFixed(2) + " Kel";
    } else if (conversionOption === "kelvinToFahrenheit") {
      result = ((temperature - 273.15) * 9) / 5 + 32;
      resultInput.value = temperature + " Kel = " + result.toFixed(2) + " Fah";
    } else {
      resultInput.value = "Please enter a valid temperature value.";
    }
  } else {
    resultInput.value = "Please enter a valid temperature value.";
  }
}

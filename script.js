window.onload = function () {
  // assigning different elements of the HTML document to variables
  const tripleContent = {
    converters: [], sliders: document.getElementsByClassName("slide")
  };
  tripleContent.converters[0] = document.getElementById("temperature--converter");
  tripleContent.converters[1] = document.getElementById("mass--converter");
  tripleContent.converters[2] = document.getElementById("length--converter");

  const converterName = document.getElementById("converter--name");

  const tempSelection_1 = document.getElementById("temp--select1");
  const tempSelection_2 = document.getElementById("temp--select2");
  
  const massSelection_1 = document.getElementById("mass--select1");
  const massSelection_2 = document.getElementById("mass--select2");

  const lengthSelection_1 = document.getElementById("length--select1");
  const lengthSelection_2 = document.getElementById("length--select2");
  
  // each conversion box
  const firstBox = document.getElementById("box--1");
  const secondBox = document.getElementById("box--2");

  const thirdBox = document.getElementById("box--3");
  const fourthBox = document.getElementById("box--4");
  
  const fifthBox = document.getElementById("box--5");
  const sixthBox = document.getElementById("box--6");

  // event to call conversion functions when the options are changed
  tempSelection_1.addEventListener("change", tempFunction);
  tempSelection_2.addEventListener("change", tempFunction);

  massSelection_1.addEventListener("change", massFunction);
  massSelection_2.addEventListener("change", massFunction);
  
  lengthSelection_1.addEventListener("change", lengthFunction);
  lengthSelection_2.addEventListener("change", lengthFunction);

  // next and prev Buttons
  let count = 0;
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  // conversion functions calculating for respectively selected options (default or changed)
  const celsiusToFahr = () => {
    firstBox.oninput = function () {
      secondBox.value = firstBox.value * 1.8 + 32;
    }
    secondBox.oninput = function () {
      firstBox.value = (secondBox.value - 32) / 1.8;
    }
  }

  const fahrToCelsius = () => {
    firstBox.oninput = function () {
      secondBox.value = (firstBox.value - 32) / 1.8;
    }
    secondBox.oninput = function () {
      firstBox.value = secondBox.value * 1.8 + 32;
    }
  }

  const celsiusToKel = () => {
    firstBox.oninput = function () {
      secondBox.value = Number(firstBox.value) + 273.15;
    }
    secondBox.oninput = function () {
      firstBox.value = secondBox.value - 273.15;
    }
  }

  const kelToCelsius = () => {
    firstBox.oninput = function () {
      secondBox.value = firstBox.value - 273.15;
    }
    secondBox.oninput = function () {
      firstBox.value = Number(secondBox.value) + 273.15;
    }
  }
    
  const fahrToKel = () => {
    firstBox.oninput = function () {
      secondBox.value = (firstBox.value - 32) / 1.8 + 273.15;
    }
    secondBox.oninput = function () {
      firstBox.value = (secondBox.value - 273.15) * 1.8 + 32;
    }
  }
    
  const kelToFahr = () => {
    firstBox.oninput = function () {
      secondBox.value = (firstBox.value - 273.15) * 1.8 + 32;
    }
    secondBox.oninput = function () {
      firstBox.value = (secondBox.value - 32) / 1.8 + 273.15;
    }
  }

  const kilogramToGram = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value * 1000;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value / 1000;
    }
  }

  const gramToKilogram = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value / 1000;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value * 1000;
    }
  }
  
  const kilogramToPound = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value * 2.205;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value / 2.205;
    }
  }
  
  const poundToKilogram = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value / 2.205;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value * 2.205;
    }
  }
  
  const kilogramToOunce = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value * 35.274;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value / 35.274;
    }
  }
  
  const ounceToKilogram = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value / 35.274;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value * 35.274;
    }
  }
  
  const gramToPound = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value / 453.6;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value * 453.6;
    }
  }
  
  const poundToGram = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value * 453.6;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value / 453.6;
    }
  }

  const gramToOunce = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value / 28.35;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value * 28.35;
    }
  }
  
  const ounceToGram = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value * 28.35;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value / 28.35;
    }
  }

  const poundToOunce = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value * 16;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value / 16;
    }
  }
  
  const ounceToPound = () => {
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value / 16;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value * 16;
    }
  }

  const metersToFeet = () => {
    fifthBox.oninput = function () {
      sixthBox.value = fifthBox.value * 3.281;
    }
    sixthBox.oninput = function () {
      fifthBox.value = sixthBox.value / 3.281;
    }
  }

  const feetToMeters = () => {
    fifthBox.oninput = function () {
      sixthBox.value = fifthBox.value / 3.281;
    }
    sixthBox.oninput = function () {
      fifthBox.value = sixthBox.value * 3.281;
    }
  }

  const metersToMiles = () => {
    fifthBox.oninput = function () {
      sixthBox.value = fifthBox.value / 1609;
    }
    sixthBox.oninput = function () {
      fifthBox.value = sixthBox.value * 1609;
    }
  }

  const milesToMeters = () => {
    fifthBox.oninput = function () {
      sixthBox.value = fifthBox.value * 1609;
    }
    sixthBox.oninput = function () {
      fifthBox.value = sixthBox.value / 1609;
    }
  }
    
  const feetToMiles = () => {
    fifthBox.oninput = function () {
      sixthBox.value = fifthBox.value / 5280;
    }
    sixthBox.oninput = function () {
      fifthBox.value = sixthBox.value * 5280;
    }
  }
    
  const milesToFeet = () => {
    fifthBox.oninput = function () {
      sixthBox.value = fifthBox.value * 5280;
    }
    sixthBox.oninput = function () {
      fifthBox.value = sixthBox.value / 5280;
    }
  }

  const sameTemp = () => {
    firstBox.oninput = function () {
      secondBox.value = firstBox.value;
    }
    secondBox.oninput = function () {
      firstBox.value = secondBox.value;
    }
    thirdBox.oninput = function () {
      fourthBox.value = thirdBox.value;
    }
    fourthBox.oninput = function () {
      thirdBox.value = fourthBox.value
    }
    fifthBox.oninput = function () {
      sixthBox.value = fifthBox.value;
    }
    sixthBox.oninput = function () {
      fifthBox.value = sixthBox.value
    }
  }

  // tempFunction to be called when temp options are default or changed
  function tempFunction() {
    let tempValue_1 = tempSelection_1.value;
    let tempValue_2 = tempSelection_2.value; 

    if (tempValue_1 == "fahrenheit" && tempValue_2 == "celsius") {
      fahrToCelsius();
    }
    if (tempValue_1 == "celsius" && tempValue_2 == "fahrenheit") {
      celsiusToFahr();
    }
    if (tempValue_1 == "celsius" && tempValue_2 == "kelvin") {
      celsiusToKel();
    }
    if (tempValue_1 == "kelvin" && tempValue_2 == "celsius") {
      kelToCelsius();
    }
    if (tempValue_1 == "fahrenheit" && tempValue_2 == "kelvin") {
      fahrToKel();
    }
    if (tempValue_1 == "kelvin" && tempValue_2 == "fahrenheit") {
      kelToFahr();
    }
    if (tempValue_1 == "celsius" && tempValue_2 == "celsius" || tempValue_1 == "fahrenheit" && tempValue_2 == "fahrenheit" || tempValue_1 == "kelvin" && tempValue_2 == "kelvin") {
      sameTemp();
    }
  }
  tempFunction();

  // massFunction to be called when mass options are default or changed
  function massFunction() {
    let massValue_1 = massSelection_1.value;
    let massValue_2 = massSelection_2.value;

    if (massValue_1 == "gram" && massValue_2 == "kilogram") {
      gramToKilogram();
    }
    if (massValue_1 == "kilogram" && massValue_2 == "gram") {
      kilogramToGram();
    }
    if (massValue_1 == "kilogram" && massValue_2 == "pound") {
      kilogramToPound();
    }
    if (massValue_1 == "pound" && massValue_2 == "kilogram") {
      poundToKilogram();
    }
    if (massValue_1 == "kilogram" && massValue_2 == "ounce") {
      kilogramToOunce();
    }
    if (massValue_1 == "ounce" && massValue_2 == "kilogram") {
      ounceToKilogram();
    }
    if (massValue_1 == "gram" && massValue_2 == "pound") {
      gramToPound();
    }
    if (massValue_1 == "pound" && massValue_2 == "gram") {
      poundToGram();
    }
    if (massValue_1 == "gram" && massValue_2 == "ounce") {
      gramToOunce();
    }
    if (massValue_1 == "ounce" && massValue_2 == "gram") {
      ounceToGram();
    }
    if (massValue_1 == "pound" && massValue_2 == "ounce") {
      poundToOunce();
    }
    if (massValue_1 == "ounce" && massValue_2 == "pound") {
      ounceToPound();
    }
    if (massValue_1 == "kilogram" && massValue_2 == "kilogram" || massValue_1 == "gram" && massValue_2 == "gram" || massValue_1 == "pound" && massValue_2 == "pound" || massValue_1 == "ounce" && massValue_2 == "ounce") {
      sameTemp();
    }
  }

  // lengthFunction to be called when length options are default or changed
  function lengthFunction() {
    let lengthValue_1 = lengthSelection_1.value;
    let lengthValue_2 = lengthSelection_2.value;

    if (lengthValue_1 == "feet" && lengthValue_2 == "meters") {
      feetToMeters();
    }
    if (lengthValue_1 == "meters" && lengthValue_2 == "feet") {
      metersToFeet();
    }
    if (lengthValue_1 == "meters" && lengthValue_2 == "miles") {
      metersToMiles();
    }
    if (lengthValue_1 == "miles" && lengthValue_2 == "meters") {
      milesToMeters();
    }
    if (lengthValue_1 == "feet" && lengthValue_2 == "miles") {
      feetToMiles();
    }
    if (lengthValue_1 == "miles" && lengthValue_2 == "feet") {
      milesToFeet();
    }
    if (lengthValue_1 == "meters" && lengthValue_2 == "meters" || lengthValue_1 == "feet" && lengthValue_2 == "feet" || lengthValue_1 == "miles" && lengthValue_2 == "miles") {
      sameTemp();
    }
  }

  // next button function
  function next() {
    count++;
    if (count >= tripleContent.converters.length) {
      count = 0;
    }
    if (count == 0) {
      tripleContent.converters[0].style.display = "block";
      tripleContent.converters[1].style.display = "none";
      tripleContent.converters[2].style.display = "none";
      tempFunction();
      converterName.innerHTML = "Temperature Converter";
      tripleContent.sliders[0].style.backgroundColor = "#002d2b";
      tripleContent.sliders[1].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[2].style.backgroundColor = "#c5e5e7";
    }
    if (count == 1) {
      tripleContent.converters[0].style.display = "none";
      tripleContent.converters[1].style.display = "block";
      tripleContent.converters[2].style.display = "none";
      massFunction();
      converterName.innerHTML = "Mass Converter";
      tripleContent.sliders[0].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[1].style.backgroundColor = "#002d2b";
      tripleContent.sliders[2].style.backgroundColor = "#c5e5e7";
    }
    if (count == 2) {
      tripleContent.converters[0].style.display = "none";
      tripleContent.converters[1].style.display = "none";
      tripleContent.converters[2].style.display = "block";
      lengthFunction();
      converterName.innerHTML = "Length Converter";
      tripleContent.sliders[0].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[1].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[2].style.backgroundColor = "#002d2b";
    }
  }
  
  // prev button function
  function prev() {
    count--;
    if (count < 0) {
      count = tripleContent.converters.length - 1;
    }
    if (count == 0) {
      tripleContent.converters[0].style.display = "block";
      tripleContent.converters[1].style.display = "none";
      tripleContent.converters[2].style.display = "none";
      tempFunction();
      converterName.innerHTML = "Temperature Converter";
      tripleContent.sliders[0].style.backgroundColor = "#002d2b";
      tripleContent.sliders[1].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[2].style.backgroundColor = "#c5e5e7";
    }
    if (count == 1) {
      tripleContent.converters[0].style.display = "none";
      tripleContent.converters[1].style.display = "block";
      tripleContent.converters[2].style.display = "none";
      massFunction();
      converterName.innerHTML = "Mass Converter";
      tripleContent.sliders[0].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[1].style.backgroundColor = "#002d2b";
      tripleContent.sliders[2].style.backgroundColor = "#c5e5e7";
    }
    if (count == 2) {
      tripleContent.converters[0].style.display = "none";
      tripleContent.converters[1].style.display = "none";
      tripleContent.converters[2].style.display = "block";
      lengthFunction();
      converterName.innerHTML = "Length Converter";
      tripleContent.sliders[0].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[1].style.backgroundColor = "#c5e5e7";
      tripleContent.sliders[2].style.backgroundColor = "#002d2b";
    }
  }
}
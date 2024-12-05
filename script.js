const principleBox = document.querySelector("#principle");
const interestRateBox = document.querySelector("#interestRate");
const timeBox = document.querySelector("#time");
const compoundYearBox = document.querySelector("#compound");
const cpiOutput = document.querySelector("#CPI");
const totalOutput = document.querySelector("#total");

principleBox.addEventListener("input", converter);
interestRateBox.addEventListener("input", converter);
timeBox.addEventListener("input", converter);
compoundYearBox.addEventListener("input", converter);
function converter() {
  // function
  const principle = Number(principleBox.value);
  const interestRate = Number(interestRateBox.value);
  const time = Number(timeBox.value);
  const compound = Number(compoundYearBox.value);

  const total =
    principle * Math.pow(1 + interestRate / compound, compound * time); //use formula to get cpi
  if (isNaN(total)) {
    //if the var is not a float
    cpiOutput.textContent = "???"; //set to ?
    totalOutput.textContent = "???";
  } else {
    cpiOutput.textContent = total - principle; //display cpi var
    totalOutput.textContent = total;
  }
}
function clearResult() {
  //set all values empty
  document.getElementById("principle").value = "";
  document.getElementById("interestRate").value = "";
  document.getElementById("time").value = "";
  document.getElementById("compound").value = "";
  document.getElementById("CPI").value = "";
  document.getElementById("total").value = "";
}
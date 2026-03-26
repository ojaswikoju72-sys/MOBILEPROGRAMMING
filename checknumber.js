function checkNumber() {
  // ✅ Variable: store user input
  let num = Number(document.getElementById("numberInput").value);
  let resultMessage = "";

  // ✅ Control statement: check positive, negative, or zero
  if (num > 0) {
    resultMessage = "The number is positive.";
  } else if (num < 0) {
    resultMessage = "The number is negative.";
  } else {
    resultMessage = "The number is zero.";
  }

  // ✅ Operators: check even or odd
  if (num % 2 === 0) {
    resultMessage += " It is also even.";
  } else {
    resultMessage += " It is also odd.";
  }

  // Display result in div
  let resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = resultMessage;
}
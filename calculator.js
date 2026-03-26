function calculateResult() {

let s1 = Number(document.getElementById("s1").value);
let s2 = Number(document.getElementById("s2").value);
let s3 = Number(document.getElementById("s3").value);
let s4 = Number(document.getElementById("s4").value);
let s5 = Number(document.getElementById("s5").value);
let s6 = Number(document.getElementById("s6").value);
let s7 = Number(document.getElementById("s7").value);
let s8 = Number(document.getElementById("s8").value);

let total = s1+s2+s3+s4+s5+s6+s7+s8;

document.getElementById("total").innerHTML = "Total Marks: " + total;

let resultText = "";
let color = "";

if(total < 400){
    resultText = "FAIL";
    color = "red";
}
else if(total >= 400 && total < 500){
    resultText = "PASS (3rd Division)";
    color = "green";
}
else if(total >= 500 && total < 600){
    resultText = "PASS (2nd Division)";
    color = "green";
}
else if(total >= 600 && total < 700){
    resultText = "PASS (1st Division)";
    color = "green";
}
else if(total >= 700 && total <= 800){
    resultText = "PASS (DISTINCTION)";
    color = "green";
}

let resultElement = document.getElementById("result");
resultElement.innerHTML = resultText;
resultElement.style.color = color;

}
// Exo 1
let integer = document.getElementById('is-integer');

if (Number.isInteger(parseFloat(integer.innerHTML))) {
    integer.innerHTML += " ==> est un nombre entier.";
}
else {
    integer.innerHTML += " ==> n'est pas un nombre entier.";
}

// Exo 2
let nan = document.getElementById('is-nan');

if (isNaN(nan.innerHTML)) {
    nan.innerHTML += " ==> est NaN ( Not a Number )";
}
else {
    nan.innerHTML += " ==> est un nombre.";
}

// Exo 3
let float = document.getElementById('parse-float');
let parseFloatFloat = parseFloat(float.innerHTML);
let parseFloatMulti = parseFloatFloat * 21;

float.innerHTML.replace(parseFloatFloat.value, parseFloatMulti.value);

// Exo 4
let int = document.getElementById("parse-int");
let parseIntNumber = parseInt(int.innerHTML);
let parseIntDiv = parseIntNumber % 21;

int.innerHTML.replace(parseIntNumber.value, parseIntDiv.value);

// Exo 5
let fixed = document.getElementById('to-fixed');
let fixFix = parseFloat(fixed.innerHTML);
let fixedFix = fixFix.toFixed(2);

document.getElementById('to-fixed').innerHTML = fixedFix;


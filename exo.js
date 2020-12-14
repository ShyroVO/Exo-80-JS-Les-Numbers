let integer = document.getElementById('is-integer');
let intergerNumber = parseInt(integer);


if (Number.isInteger(intergerNumber)) {
    integer.innerHTML += " ==> est un nombre entier.";
}
else {
    integer.innerHTML += " ==> n'est pas un nombre entier.";
}


let nan = document.getElementById('is-nan');

if (isNaN(nan)) {
    nan.innerHTML += " ==> est NaN ( Not a Number )";
}
else {
    nan.innerHTML += " ==> est un nombre.";
}

let fixed = document.getElementById('to-fixed');
let fixedValue = fixed.value;

console.log(fixedValue);

document.getElementById('to-fixed').innerHTML = Number.parseInt(fixed).toFixed(2) ;
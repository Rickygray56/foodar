// Write a JavaScript function that reverses a number and/or a word.

var x = 200000;

function reverseNumber() {
    x = x + '';
    
    x = x.split('').reverse().join('');
    console.log(x);
}

reverseNumber();

function reverseString(str) {
    str = str.split('').reverse().join('');
    console.log(str);
}

reverseString('Ricky');


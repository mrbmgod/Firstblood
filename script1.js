"use strict"
alert('Hello');

const result = confirm("Are You Here?");
console.log(result);

const answer = prompt("How old are you?", "");
console.log(answer);

const answers = [];

answers[0] = prompt("What is your name?","");
answers[1] = prompt("What is your surname?","");
answers[2] = prompt("What is your middlename?","");
console.log(answers);

interpolice

const category = "toys";
console.log("http;//someurl.com/${category}/5`);

OPERATORS

console.log('arr' + " - object");
console.log(4 + "5");


let incr = 10,
    decr = 10;

++incr;
--decr;
console.log(incr);
console.log(decr);

console.log(5%2);
console.log(2*4 === 8);

const isChecked = true,
      isClose = true;

console.log(isChecked&& isClose);
console.log(isChecked|| isClose);
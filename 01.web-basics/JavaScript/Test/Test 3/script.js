// Aufgabe 1:
console.log("Aufgabe 1");
const data2 = "Das Leben ist schön";

let word = data2.split(" ");
let word2 = data2.split("");
console.log(word);
console.log(word2);
for (let i = 0; i < word.length; i++) {
  if (word % 2 == 0) {
    console.log(word);
  }
}

//Aufgabe 2:
console.log("Aufgabe 2");
const data1 = "4, 9, -3, -4, -5, 10, -2, 1, 14";

let sum = 0;
let Mittelwert = 0;
let numbers = data1.split(",");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0 && numbers[i] < 0) {
    console.log("num", numbers[i]);
    sum = sum + parseInt(numbers[i]);
  }
  Mittelwert = sum / numbers[i].length;
}

console.log(sum);
console.log(Mittelwert);

// Aufgabe 3:

console.log("Aufgabe 3");

const data3 = "Das Leben ist schön";
let text2 = data3.split("");
let aüö = 0;

for (let i = 0; i < text2.length; i++) {
  if (text2[i] == "a" || text2[i] == "ü" || text2[i] == "ö") {
    aüö = aüö + 1;
  }
}
console.log(aüö);

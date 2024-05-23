//1
const data = "4, 9, -3, -9, -5, 10, 2, 1, 14";

let sum1 = 0;
let numbers1 = data.split(",");

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 == 0) {
    sum1 = sum1 + parseInt(numbers1[i]);
  }
}
let Mittelwert = sum1 / numbers1.length;
console.log(sum1);
console.log(Mittelwert);

//3

const data3 = "Das Leben ist schön";
let text2 = data3.split("");
let ae = 0;

for (let i = 0; i > text2.length; i++) {
  if (text2 == "a" || text2 == "e") {
    ae = ae + 1;
  }
}
console.log(ae);

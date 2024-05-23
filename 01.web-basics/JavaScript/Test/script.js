const data3 = "4, 9, -3, -9, -5, 10, 2, 1, 14";

let sum1 = 0;
let numbers1 = data3.split(",");

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0) {
    sum1 = sum1 + parseInt(numbers1[i]);
  }
}

let posMittelwert = sum1 / numbers1.length;

console.log(sum1);
console.log(posMittelwert);

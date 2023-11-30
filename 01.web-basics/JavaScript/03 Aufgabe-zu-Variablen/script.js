let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let gewichtBanane = 0.22;
let gewichtApple = 0.34;

let gewichtapfelprokilo = 1/0.34;
let gewichtbananeprokilo = 1/0.22;
 
console.log("Apfel pro Kilo: ", gewichtapfelprokilo);
console.log("Bananen pro Kilo: ", gewichtbananeprokilo);

console.log("Ein Apfel kosten " + applePricePerKilo  / gewichtapfelprokilo + "€");
console.log("Eine Banane kosten " + bananaPricePerKilo  / gewichtbananeprokilo + "€");

let einApfel = applePricePerKilo  / gewichtapfelprokilo;
let eineBanane = bananaPricePerKilo  / gewichtbananeprokilo;

console.log("8 Äpfel Kosten " + einApfel * 8 + "€");
console.log("17 Bananen kosten " + eineBanane * 17 + "€");

console.log("Preis von 1 Tonne Äpfel sind " + applePricePerKilo * 1000 + "€");
console.log("Preis von 1 Tonne Bananen sind " + bananaPricePerKilo * 1000 + "€");
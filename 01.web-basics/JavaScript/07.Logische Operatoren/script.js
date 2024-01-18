const zahl1 = Math.floor(Math.random() * 101);
const zahl2 = Math.floor(Math.random() * 101);
 
// Gib die generierten Zahlen aus
console.log("Zahl 1: "+zahl1);
console.log("Zahl 2: "+zahl2);
 
// Überprüfe die Bedingungen und gib entsprechende Nachrichten aus
if (zahl1 < zahl2 && zahl1 < 50) {
  console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
 
if (zahl1 < 30 || zahl2 < 30) {
  console.log("Eine der beiden ist kleiner als 30");
}
 
if (zahl1 < 50 && zahl2 !== 50) {
  console.log("Erste Zahl klein, zweite kein 50iger");
}
import { log } from "console";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

let balance = 0;
let finish = false;

while (!finish) {
  console.log("1. Einzahlen");
  console.log("2. Abheben");
  console.log("3. Konstostand");
  console.log("4. Beenden");

  let input = await readLineAsync();
  console.log("Selection:", input);

  if (input == 1) {
    console.log("Wie viel € möchten sie einzahlen?");
    let amount = Number(await readLineAsync());
    balance = balance + parseFloat(amount);
    console.log("Ihre Einzahlung wurde erfolgreich abgeschlossen");
  } else if (input == 2) {
    console.log("Wie viel € möchten sie abheben?");
    let abhebung = Number(await readLineAsync());
    balance = balance - abhebung;
    console.log("Von ihrer Konto wurden " + abhebung + " € abgehoben");
    console.log("Ihr Kontostand beträgt " + balance + " €.");
  } else if (input == 3) {
    console.log("Ihr Kontostand beträgt " + balance + " €.");
  } else if (input == 4) {
    readline.close();
  }
}

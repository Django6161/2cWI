
function printMenu(name, age, place){
    console.log("Willkommen " + name + "!" + "Du bist" + age + "jahre alt und kommst aus" + place);
}

printMenu("Peter", 17, "Göfis");

function math(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log((a + b) / 2 * a);
}

math(4, 6);

function easter(c, d, e){
    console.log("Ostern findet am " + c + "." + d + "." +e + "statt!");
}

easter(31, 3, 2024)
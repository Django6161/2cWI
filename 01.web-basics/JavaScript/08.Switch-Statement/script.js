let randomNumber = Math.random() *6;
let random= Math.floor(randomNumber) + 5;

if(randomNumber == 10){
    console.log("Ten");
} else if(randomNumber == 9){
    console.log("Nine");
} else if(randomNumber == 8){
    console.log("Eight")
}else if(randomNumber == 6){
    console.log("six");
} else if(randomNumber == 7){
    console.log("Seven");
} else if(randomNumber == 5){
    console.log("Five");
}else{
    console.log("Die Zahl liegt außerhalb des angegebenen Bereichs");
}
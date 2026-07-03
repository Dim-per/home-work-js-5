//1
let drink = "кава";

switch (drink) {
    case "кава":
        console.log("Ви обрали каву");
        break;
    case "чай":
        console.log("Ви обрали чай");
        break;  
    case "сік":
        console.log("Ви обрали сік");
        break;  
    default:
        console.log("Ви обрали невідомий напій");
}
//2
let day = "понеділок";
switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        console.log("Це робочий день");
        break;

    case "субота":
    case "неділя":
        console.log("Це вихідний день");
        break;

    default:
        console.log("Невідомий день тижня");
}
//3
let month = 7;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Невідомий місяць");
}
//4
let color = "червоний";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("Invalid color");
}
//5
let a = 10;
let b = 2;
let operation = "/";
switch (operation) {
case "+":
    console.log(a + b);
    break;
case "-":
    console.log(a - b);
    break;    
case "*":
    console.log(a * b);
    break;  
case "/":
    if (b === 0) {
        console.log("Ділення на нуль неможливе");
    } else {
        console.log(a / b);
    }
    break;
default:
    console.log("Невідома операція");
}

//1
console.log(firstName = "Serhii")
console.log(lastName = "Oprujak")
console.log(firstName + lastName)

//2
let l = 2;
let w = 4;
console.log(s = l * w);

//3
console.log(10 ** 6)


//4
console.log(Math.floor(Math.random() * 50))


//5
let number = -1;
if (number > 0) {
    console.log("positive value")
} else {
    console.log("negative value")
}


//6



//7
let month = 12;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("month don`t found")
}


//8
let password = "ddddddddd&v";
if (password.length > 5) {
    if (password.indexOf('&')>0)
        console.log("this password is strong")
} else {
    console.log("this password is weak")
}


//9
let a = 2;
let b = 4;
if (typeof a =="number" && typeof b =="number") {
    console.log(a+b)
} else {
    console.log("Sum of those items can’t be counted")
}



//10
let textOne = "bca";
let textTwo = "cba";
if (typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length) {
    console.log("those items are strings and they’re equal")
} else {
    console.log("items are not compareble")
}

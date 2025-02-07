// let number=prompt("Enter any number")
// if (number%10 === 0){
//     console.log("good")
// }
// else{
//     console.log("bad")
// }






// let name = prompt("Enter your name")
// let age = prompt("Enter your age")

// alert(`${name} is ${age} year old`)





// let month = prompt("Enter months in Quater 1-4")
// switch(month){
//     case "1":
//         console.log("January,February,March");
//         break;
//     case "2":
//         console.log("April,May,June");
//         break;
//     case "3":
//         console.log("July,August,September");
//         break;
//     case "4":
//         console.log("October,November,December");
//         break; 
//     default:
//         console.log("wrong entry please read carefully")   
// }       





// let char= prompt("Enter golden string")
// if ((char[0] == "A" || char[0] == "a") && (char.length > 5 )) {
//     console.log("It is golden string")
// }
// else{
//     console.log("Not a golden string")
// }




// alert("program to check if 2 numbers have the same last digit")
// let a = prompt("Enter first number")
// let b = prompt("Enter second number")

// if (a[a.length-1] === b[b.length-1]){
//     console.log(`Have Same last digit ${a[a.length-1]}`)
// }
// else{
//     console.log("Last digit is not the same")
// }






let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter third number")

if (a > b && a > c){
    console.log(`${a} is largest number`)
}

else if (b > a && b > c){
    console.log(`${b} is largest number`)
}

else if (c > a && c > b){
    console.log(`${c} is largest number`)
}
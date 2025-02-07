
// let num = ['1','2','3','4','5']
// console.log(num);
// console.log(num.slice(0,3));



// let num = ['1','2','3','4','5']
// console.log(num);
// console.log(num.slice(-3));




// let str = prompt("Enter string");
// if (str.length == 0){
//     console.log("string is empty");
// }
// else {
//      console.log("string is not empty")    
// }




// let str="ApNaCoLlEgE";
// let idx=3;
// if (str[idx] == str[idx].toLowerCase()){
//     console.log("characterislowercase");
// }
// else{
//     console.log("characterisnotlowercase");
// }


// let str=prompt("please enter a string");
// console.log(`original string=${str}`);
// console.log(`string without spaces=${str.trim()}`);




let arr = ['car','bike','van','truck','jeep']
let checkarr = prompt('ENTER THE ARRAY YOU WANT TO CHECK')
if(arr.indexOf(checkarr) != -1){
    console.log("exist")
}
else{
    console.log("Not exist")
}
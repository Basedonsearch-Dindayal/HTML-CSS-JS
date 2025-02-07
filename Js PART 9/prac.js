let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "CLick Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

input.placeholder = "username";
button.id ="btn";

document.querySelector("#btn").style.backgroundColor = "blue";
document.querySelector("#btn").style.color = "white";

let head1 = document.createElement('h1');
head1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(head1);



let p1 = document.createElement('p');
p1.innerHTML ="HELLO GO to hell <b> MR X </b>";
document.querySelector("body").append(p1);

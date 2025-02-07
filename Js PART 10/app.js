// let div = document.querySelector("div");
// div.addEventListener("mouseout", function() {
//    console.log("out!!!!")
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function() {
//     console.log("key was press");
// });

// let button = document.createElement("button");
// button.innerHTML ="click me";
// let body = document.querySelector("body");
// body.appendChild(button);

// button.addEventListener("click",function(){
//     button.style.backgroundColor="green"
// })
let head = document.querySelector("h2");
let text = document.querySelector("input");

text.addEventListener("input", function() {
    // Log the current input value
    console.log(text.value);
    
    // Filter the input to only allow letters and spaces
    const filteredValue = text.value.replace(/[^a-zA-Z\s]/g, '');
    
    // Update the heading with the filtered value or a default message
    head.textContent = filteredValue || "Enter your name";
});

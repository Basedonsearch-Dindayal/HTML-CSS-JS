let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "(X)";
    delBtn.classList.add("delete");
    
    // Add the delete button event listener here
    delBtn.addEventListener("click", function() {
        let par = this.parentElement;
        par.remove();
    });

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

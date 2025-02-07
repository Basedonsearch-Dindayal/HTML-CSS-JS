// let TODO = [];

// while (true) {
//     let req = prompt("Please enter your request");

//     if (req === "quit") {
//         console.log("Quitting app");
//         break;
//     }

//     if (req === "list") {
//         console.log("-----------------");
//         for (let i = 0; i < TODO.length; i++) {
//             console.log(i, TODO[i]);
//         }
//         console.log("-----------------");
//     } else if (req === "add") {
//         let task = prompt("Please enter the task you want to add");
//         TODO.push(task);
//         console.log("Task added");
//     } else if (req === "delete") {
//         let idx = prompt("Please enter the task index");
//         if (idx >= 0 && idx < TODO.length) {
//             TODO.splice(idx, 1);
//             console.log("Task deleted");
//         } else {
//             console.log("Invalid index. Task not deleted.");
//         }
//     } else {
//         console.log("Wrong request");
//     }
// }

const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening on port:${port} `)
});

// app.use((req,res)=>{
//     console.log("request received");
//     res.send("this is for testing");
// });

// app.get("/",(req,res)=>{
//     res.send ("you contacted root path")
//     console.log("received root request")
// });
// app.get("/apple",(req,res)=>{
//     res.send ("you contacted apple path")
// });
// app.get("/orange",(req,res)=>{
//     res.send ("you contacted orange path")
// });
// app.get("/graphs",(req,res)=>{
//     res.send ("you contacted graphs path")
// });
// app.get("*",(req,res)=>{
//     res.send ("path is not exist")
// });
// app.post("/hello",(req,res)=>{
//     res.send ("just post ")
// });


//paths parameter code//

app.get("/:username/:id",(req,res)=>{
    let{username,id} = req.params;
    res.send("root page")
    console.log(username)
    console.log(id)
});

// query //

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no results")
});
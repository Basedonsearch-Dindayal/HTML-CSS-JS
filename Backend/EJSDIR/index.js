const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
}); 


app.get("/rolldice",(req, res)=>{
    res.render("rolldice")
});


app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData)
    const data = instaData[username];
    res.render("instagram.ejs",{data});
});
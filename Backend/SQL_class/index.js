const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'montmoso',
    database : 'data_app'
  });

let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };
  
app.get("/",(req,res)=>{
  res.send("welcome to new page")
})

app.listen(8080,()=>{
  console.log(`server is listening to the port 8080`);
});

// try{
//   connection.query(q,user,(err,result) =>{
//       if(err) throw err;
//       console.log(result);
//     });
// }catch (err){
//   console.log(err);
// }

// connection.end();
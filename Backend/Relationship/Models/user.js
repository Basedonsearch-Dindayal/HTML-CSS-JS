const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=> console.log("database connected successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdb');
}

const userSchema = new Schema({
  username:String,
  addresses:[
    {
      _id:false,
      location:String,
      city:String,
    },
  ], 
});

const User = mongoose.model("User",userSchema);

const addUsers = async() =>{
  let user1 = new User({
    username:"Harry potter",
    addresses:[{
      location:"221B Choco street",
      city:"bhopal",
    }]
  })
  
  user1.addresses.push({location:"P32 gandhi nagar",city:"indore"});
  let result = await user1.save();
  console.log(result);
}
addUsers();
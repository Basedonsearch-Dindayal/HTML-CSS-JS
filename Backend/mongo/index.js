const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connection successful");

        const userSchema = new mongoose.Schema({
            name: String,
            email: String,
            age: Number,
        });

        const User = mongoose.model("User", userSchema);

        User.updateOne({name:"bony"},{age:25})
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        });

        // User.find({age:{$gt: 47}}).then(res=>{
        //     console.log(res[0].name);
        // }).catch(err=>{
        //     console.log(err);
        // });

        // Insert users only after connection is successful
        // const users = await User.insertMany([
        //     { name: "tony", email: "tony@gmail.com", age: 50 },
        //     { name: "pony", email: "pony@gmail.com", age: 40 },
        //     { name: "sony", email: "sony@gmail.com", age: 30 },
        //     { name: "bony", email: "bony@gmail.com", age: 20 },
        // ]).then((res)=>{
        //     console.log(res);
        // });

        // Optional: Save a single user
        // const user1 = new User({ name: "Adam", email: "adam@gmail.com", age: 55 });
        // await user1.save();
        // console.log("User saved:", user1);

    } catch (err) {
        console.log("Error:", err);
    }
}

main();

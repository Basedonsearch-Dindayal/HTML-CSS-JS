const { types } = require("joi");
const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=> console.log("database connected successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdb');
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name:String,
  orders:[
    {
      type: Schema.Types.ObjectId,
      ref :"Order"
    },
  ],
});
const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async()=>{
  let cust1 = new Customer({
    name:"mohanlal yadav",
  });
   let order1 = await Order.findOne({item:"samosa"});
   let order2 = await Order.findOne({item:"biryani"});

   cust1.orders.push(order1);
   cust1.orders.push(order2);

   let result = await cust1.save();
   console.log(result);
};

addCustomer();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     {
//       item: "samosa",
//       price : 25,
//     },
//     {
//       item:"biryani",
//       price: 120,
//     },
//     {
//       item:"paneer",
//       price: 90,
//     }
//   ]);
//   console.log(res);
// };

// addOrders();
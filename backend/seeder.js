// import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
      //             For each product in the products array, the spread syntax { ...product } creates a shallow copy of the product object. This means that all properties of the product object are copied into a new object.

      // Then, a new property user with the value of adminUser is added to this new object. So, the sampleProducts array contains new objects with all the properties of the original products, and each object has an additional user property.

      // Using the spread syntax in this way is a convenient way to create new objects with some modifications or additions to the properties of existing objects. It allows you to maintain immutability (the original objects remain unchanged) while creating new objects with desired changes.
    });

    await Product.insertMany(sampleProducts);   
    console.log('Data Imported!'.green.inverse)
    process.exit();
} catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData= async()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

// console.log(process.argv) 
if (process.argv[2]==='-d'){//we can take any thing in place of '-d' "when we write node seeder.js -d"
  destroyData();
}
else{
  importData();
}
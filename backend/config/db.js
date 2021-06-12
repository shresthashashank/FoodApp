require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection succeded");
  } catch (error) {
    console.log("COnnection Failed");
    process.exit(1);
  }
};

module.export = connectDB();

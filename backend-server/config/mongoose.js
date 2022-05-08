// const mongoose = require('mongoose');

// const db = process.env.MONGO_URI;

// mongoose.connect(db)
//     .then(() => console.log('Connected to DB ...'))
//     .catch(err => console.log(err))



    const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://fatihProject:19900203@webdevops.s7xwh.mongodb.net/MerStackProjectFatih" , {
      useNewUrlParser: true,
      // useFindAndModify: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    });

    console.log("MongoDB Connection Success 👍");
  } catch (error) {
    console.log("MongoDB Connection Failed 💥");
    process.exit(1);
  }
};

module.exports = connectDB;
const dotenv = require("dotenv");
const express = require("express");
const unless = require("express-unless");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./Routes/userRoute");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//MONGODB CONNECTION

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection is succesfull!");
  })
  .catch((err) => {
    console.log(`Database connection failed!`);
    console.log(`Details : ${err}`);
  });

  //ROUTES

  app.use("/user",userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is online! Port: ${process.env.PORT}`);
});

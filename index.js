const express = require("express");
const { connectToMongoDB } = require("./config/mongoDB");
const formRoute = require("./route/formRoute");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", formRoute);

connectToMongoDB(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });
});

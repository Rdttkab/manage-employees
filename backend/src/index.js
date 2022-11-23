const express = require("express");
const connect = require("./config/db");
const { json } = require("express");
const employeeRoute = require("./routes/employeeRoute");

const url = process.env.MONGO_DB_CLOUD;

connect(url);

const app = express();
app.use(json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Todo API, See Documentation for all APIs",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.use("/employee", employeeRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

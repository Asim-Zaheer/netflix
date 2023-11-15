const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const index = express();
index.use(express.json());
index.use(express.urlencoded({ extended: true }));
index.use(cors());

index.get("/", cors(), (req, res) => {});

index.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("fail");
  }
});

index.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});
index.listen(4000, () => {
  console.log("Port Connected");
});

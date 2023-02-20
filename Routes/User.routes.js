let express = require("express");
let { UserModel } = require("../Models/user.models");
let UserRouter = express.Router();
let bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
UserRouter.get("/", (req, res) => {
  res.send("Everything is working great");
});

UserRouter.post("/register", async (req, res) => {
  const { name, email, password, gender, age, city } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send({ msg: "there is an error" });
      } else {
        const user = new UserModel({
          name,
          email,
          password: hash,
          gender,
          age,
          city,
        });
        await user.save();
        res.send("Ther user is Regiseterd");
      }
    });
  } catch (err) {
    res.send("hey there is err");
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          let token = jwt.sign({ "sa": "asljkd" }, "sammy");
          res.send({ msg: "the user is logged in", token: token });
        } else {
          res.send({ msg: "wrong Cred" });
        }
      });
    } else {
      res.send("hey there is err");
    }
  } catch (err) {
    res.send("hey there is err");
  }
});

module.exports = {
  UserRouter,
};

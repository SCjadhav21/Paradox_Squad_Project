const express = require("express");
const { connection } = require("./configs/db");
const { UserModel } = require("./models/usersmodel");
const jwt = require("jsonwebtoken");
const { iitRouter } = require("./routes/iitRoutes");
const { bankingRouter } = require("./routes/bankingRoutes");
const { ndaRouter } = require("./routes/ndaRoutes");
const { neetRouter } = require("./routes/neetRoutes");
const { upscRouter } = require("./routes/upscRoutes");
const { sscRouter } = require("./routes/sscRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("WELCOME");
});

app.use("/iit", iitRouter);
app.use("/banking", bankingRouter);
app.use("/nda", ndaRouter);
app.use("/ssc", sscRouter);
app.use("/upsc", upscRouter);
app.use("/neet", neetRouter);

app.post("/register", async (req, res) => {
  const payload = req.body;
  try {
    const user = new UserModel(payload);
    await user.save();
    res.send("resgistered");
  } catch (error) {
    res.send("error in registering user");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email, password });
    const token = jwt.sign({ course: "backend" }, "masai");
    // const token = jwt.sign({ payload }, 'key');
    if (user.length > 0) {
      console.log(user);
      res.send(`logged in, welcome :  ${user[0].name} ,\n token : ${token}`);
    } else {
      res.send("register first");
    }
  } catch (error) {
    res.send("error in logining user");
  }
});

app.listen(4500, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log("error in connecting to db", error);
  }
  console.log("running on port 4500");
});

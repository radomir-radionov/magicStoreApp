require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const http = require("http");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const router = require("./router");
const errorMiddleware = require("./middlewares/error-middleware");
const User = require("./models/user-model");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.static(path.join(__dirname + "/public")));
app.use(cookieParser());
app.use(compression());
app.use("/api", router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
const host = "0.0.0.0";

const server = http.createServer((req, res) => {
  //your stuff
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    server.listen(PORT, host, console.log(`Listening on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images/");
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/api/userAvatar", upload.single("file"), async (req, res) => {
//   const userId = req.body.userId;
//   await User.findByIdAndUpdate(userId, {
//     avatar: { contentType: "image/jpeg", data: fs.readFileSync(req.file.path) },
//   });
//   res.json({ message: "New avatar added to the db!" });
// });
// .get(function (req, res) {
//   console.log(1);
//   Img.findOne({}, "img createdAt", function (err, img) {
//     console.log(2);
//     if (err) res.send(err);
//     console.log(img);
//     res.contentType("json");
//     res.send(img);
//   }).sort({ createdAt: "desc" });
// });

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
const fs = require("fs");
const path = require("path");
const userModel = require("./models/user-model");
const fsp = require("fs/promises");

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.static(path.join(__dirname + "/public")));
app.use(cookieParser());
app.use(compression());
app.use("/api", router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, console.log(`Listening on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./server/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post("/api/setImage", upload.single("file"), async (req, res) => {
  try {
    const userId = req.body.userId;
    const avatar = {
      img: {
        data: await fsp.readFile(
          path.join(__dirname, "/uploads/", req.file.filename)
        ),
        contentType: req.file.mimetype,
      },
    };
    await userModel.findByIdAndUpdate(userId, {
      img: {
        contentType: req.file.mimetype,
        data: await fsp.readFile(req.file.path),
      },
    });
    const user = await userModel.findById(userId);
    res.set("Content-Type", user.img.contentType);
    res.send(user.img.data);
  } catch (err) {
    console.log(err);
  }
});

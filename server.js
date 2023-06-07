const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Server is running Dear!" });
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log("SERVER RUNNING ERROR", error);
  }
};
start();

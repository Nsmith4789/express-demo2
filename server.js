import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To Express Server");
});

app.get("/about", (req, res) => {
  res.type("json");
  res.send("I Hope You like Cars");
});

app.get("/user/:id", (req, res) => {
  const userID = req.params.id;
  const s = req.query.sepia;
  console.log(s);
  res.json({ make: "UserID" + userID });
});

app.post("/contact", (req, res) => {
  const data = req.body;
  res.json({ message: "info received", data });
});

app.post("/cars", (req, res) => {
  const data = req.body;
  console.log(data.make);
  if (data.make) {
    res.status(200).send(data);
  } else {
    res.status(404).send({
      error: "make needed",
    });
  }
});

app.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});

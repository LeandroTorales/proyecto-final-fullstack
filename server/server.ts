import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.json({ "hola?": "holaAAAAAAAAAAAAAAA" });
});

app.listen(8080, () => {
  console.log("consolo log hola en el puerto 8080");
});

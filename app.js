// app.js
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const itemsRouter = require("./routes/itemsRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const db = require("./db/queries");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// index
app.get("/", async (req, res) => {
  const categories = await db.getAllCategories();
  const items = await db.getAllItems();

  res.render("index", {
    categories,
    items,
    query: req.query,
  });
});

// CRUD routes
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});

const db = require("../db/queries");

exports.createItemGet = async (req, res) => {
  const categories = await db.getAllCategories();
  res.render("createItem", { categories });
};

exports.createItemPost = async (req, res) => {
  const item = req.body;
  await db.createItem(item);
  res.redirect("/");
};

exports.editItemGet = async (req, res) => {
  const item = await db.getItem(req.params.id);
  const categories = await db.getAllCategories();
  res.render("editItem", { item, categories });
};

exports.editItemPost = async (req, res) => {
  const item = req.body;
  await db.editItem(req.params.id, item);
  res.redirect("/");
};

exports.deleteItem = async (req, res) => {
  await db.delItem(req.params.id);
  res.redirect("/");
};

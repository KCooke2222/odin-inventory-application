const db = require("../db/queries");

exports.createCategoryGet = async (req, res) => {
  res.render("createCategory");
};

exports.createCategoryPost = async (req, res) => {
  const category = req.body;
  await db.createCategory(category);
  res.redirect("/");
};

exports.editCategoryGet = async (req, res) => {
  const category = await db.getCategory(req.params.id);
  res.render("editCategory", { category });
};

exports.editCategoryPost = async (req, res) => {
  const category = req.body;
  await db.editCategory(req.params.id, category);
  res.redirect("/");
};

exports.deleteCategory = async (req, res) => {
  try {
    await db.delCategory(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.redirect("/?error=Category+still+has+items");
  }
};

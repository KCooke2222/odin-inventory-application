// routes/categoriesRouter.js
const { Router } = require("express");
const categoriesController = require("../controllers/categoriesController");

const categoriesRouter = Router();

categoriesRouter.get("/new", categoriesController.createCategoryGet);
categoriesRouter.post("/new", categoriesController.createCategoryPost);
categoriesRouter.get("/:id/edit", categoriesController.editCategoryGet);
categoriesRouter.post("/:id/edit", categoriesController.editCategoryPost);
categoriesRouter.post("/:id/delete", categoriesController.deleteCategory);

module.exports = categoriesRouter;

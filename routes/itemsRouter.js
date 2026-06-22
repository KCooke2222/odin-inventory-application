// routes/itemsRouter.js
const { Router } = require("express");
const itemsController = require("../controllers/itemsController");

const itemsRouter = Router();

itemsRouter.get("/new", itemsController.createItemGet);
itemsRouter.post("/new", itemsController.createItemPost);
itemsRouter.get("/:id/edit", itemsController.editItemGet);
itemsRouter.post("/:id/edit", itemsController.editItemPost);
itemsRouter.post("/:id/delete", itemsController.deleteItem);

module.exports = itemsRouter;

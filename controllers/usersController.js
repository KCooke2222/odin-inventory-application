const db = require("../db/queries");

async function getUsernames(req, res) {
  const search = req.query.search || "";
  const usernames = await db.getUsernames(search);

  res.render("index", { usernames, search });
}

async function createUsernameGet(req, res) {
  // render the form
  res.render("createUser");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteUsernames(req, res) {
  await db.deleteAllUsernames();
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
};

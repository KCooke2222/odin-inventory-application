const pool = require("./pool");

async function getUsernames(search = "") {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE $1",
    [`%${search}%`],
  );

  return rows;
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getUsernames,
  insertUsername,
  deleteAllUsernames,
};

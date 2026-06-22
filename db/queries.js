const pool = require("./pool");

// Items

exports.getAllItems = async () => {
  items = await pool.query(`SELECT * FROM items`, []);
  return items.rows;
};

exports.getItem = async (id) => {
  item = await pool.query(`SELECT * FROM items WHERE id=$1`, [id]);
  return item.rows[0];
};

exports.createItem = async (item) => {
  const { name, image_url } = item;
  const quantity = Number(item.quantity);
  const category_id = Number(item.category_id);

  await pool.query(
    `INSERT INTO items (name, quantity, image_url, category_id)
     VALUES ($1, $2, $3, $4)`,
    [name, quantity, image_url, category_id],
  );
};

exports.editItem = async (id, item) => {
  const { name, image_url } = item;
  const quantity = Number(item.quantity);
  const category_id = Number(item.category_id);

  await pool.query(
    `UPDATE items
    SET name = $1,
    quantity = $2,
    image_url = $3,
    category_id = $4
    WHERE id = $5;`,
    [name, quantity, image_url, category_id, id],
  );
};

exports.delItem = async (id) => {
  await pool.query(`DELETE FROM items WHERE id=$1`, [id]);
};

// Category

exports.getAllCategories = async () => {
  categories = await pool.query(`SELECT * FROM categories`, []);
  return categories.rows;
};

exports.getCategory = async (id) => {
  category = await pool.query(`SELECT * FROM categories WHERE id=$1`, [id]);
  return category.rows[0];
};

exports.getAllCategories = async () => {
  categories = await pool.query(`SELECT * FROM categories`, []);
  return categories.rows;
};

exports.createCategory = async (category) => {
  const { name, description } = category;

  await pool.query(
    `INSERT INTO categories (name, description)
     VALUES ($1, $2)`,
    [name, description],
  );
};

exports.editCategory = async (id, category) => {
  const { name, description } = category;

  await pool.query(
    `UPDATE categories
    SET name = $1,
    description = $2
    WHERE id = $3;`,
    [name, description, id],
  );
};

exports.delCategory = async (id) => {
  await pool.query(`DELETE FROM categories WHERE id=$1`, [id]);
};

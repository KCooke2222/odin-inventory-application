#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ) not NULL,
  description TEXT
);

CREATE TABLE items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  image_url TEXT,
  category_id INTEGER REFERENCES categories(id) ON DELETE RESTRICT
);

INSERT INTO categories (name, description)
VALUES 
  ('Citrus', 'Bright, acidic fruits'),
  ('Berries', 'Small sweet fruits'),
  ('Tropical', 'Fruits grown in warm climates');

INSERT INTO items (name, quantity, image_url, category_id)
VALUES
  ('Orange', 30, 'https://source.unsplash.com/600x400/?orange,fruit', 1),
  ('Lemon', 20, 'https://source.unsplash.com/600x400/?lemon,fruit', 1),
  ('Lime', 25, 'https://source.unsplash.com/600x400/?lime,fruit', 1),

  ('Strawberry', 40, 'https://source.unsplash.com/600x400/?strawberry,fruit', 2),
  ('Blueberry', 35, 'https://source.unsplash.com/600x400/?blueberry,fruit', 2),
  ('Raspberry', 18, 'https://source.unsplash.com/600x400/?raspberry,fruit', 2),

  ('Mango', 22, 'https://source.unsplash.com/600x400/?mango,fruit', 3),
  ('Pineapple', 15, 'https://source.unsplash.com/600x400/?pineapple,fruit', 3),
  ('Banana', 50, 'https://source.unsplash.com/600x400/?banana,fruit', 3);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

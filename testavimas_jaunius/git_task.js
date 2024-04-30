const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let shops = [];
let items = [];

// Get all shops
app.get('/shops', (req, res) => {
  res.json(shops);
});

// Add a new shop
app.post('/shops', (req, res) => {
  const newShop = req.body;
  shops.push(newShop);
  res.status(201).json(newShop);
});

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Add a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Get items by shop
app.get('/shops/:shopId/items', (req, res) => {
  const shopId = req.params.shopId;
  const shopItems = items.filter(item => item.shopId === shopId);
  res.json(shopItems);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

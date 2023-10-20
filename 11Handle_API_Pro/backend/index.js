import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "wood",
      price: 19.99,
      image: "https://example.com/product1.jpg",
    },
    {
      id: 2,
      name: "Chair",
      price: 29.99,
      image: "https://example.com/product2.jpg",
    },
    {
      id: 3,
      name: "Table",
      price: 14.99,
      image: "https://example.com/product3.jpg",
    },
    {
      id: 4,
      name: "Flower",
      price: 39.99,
      image: "https://example.com/product4.jpg",
    },
    {
      id: 5,
      name: "Fruits",
      price: 49.99,
      image: "https://example.com/product5.jpg",
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

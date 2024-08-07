const router = require("express").Router();
const datas = require("../data/data.json");
// const fs = require("fs");

router.get("/", (req, res) => {
  res.send("Hello World!!");
});

// menampilkan data semua buku dalam bentuk JSON dengan endpoint GET /books
router.get("/books", (req, res) => {
  res.send(datas);
});

// menampilkan data 1 buku dalam bentuk JSON GET /books/:id
router.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const data = datas.find((item) => item.id == id);

  if (!data) {
    return res.status(404).send("Data not Found");
  }

  res.send(data);
});

// menampilkan data dalam template EJS. GET /ejs/books
router.get("/ejs/books", (req, res) => {
  res.render("bookList", { books: datas });
});

module.exports = router;

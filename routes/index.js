const router = require("express").Router();
const datas = require("../data/data.json");
// const fs = require("fs");

router.get("/", (req, res) => {
  res.redirect("/ejs/books");
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
  res.render("layout", { books: datas, view: "bookList" });
});

// menampilkan data detail dalam template EJS. GET /ejs/books
router.get("/ejs/books/:id", (req, res) => {
  const { id } = req.params;
  const data = datas.find((item) => item.id == id);

  res.render("layout", { book: data, view: "bookDetail" });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");



  router.post("/", bookController.addBook)

  router.get("/", bookController.displayAllBooks)

  router.get("/:id", bookController.displayById)

  router.put("/:id", bookController.updateBook)

  router.delete("/:id", bookController.deleteBook)

module.exports = router;
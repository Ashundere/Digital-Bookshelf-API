const Book = require("../models/Book");

const addBook = async (req, res)=>{
        try {
            const newBook = await Book.create(req.body)
            res.status(201).json(newBook)
        } catch (error) {
            console.error("Error registering book:", error)
            res.status(400).json({error: "Failed to register book", details: error.message})
        }
}

const displayAllBooks = async (req, res)=>{
    try{
          const allBooks = await Book.find({});
          console.log('Found Books:', allBooks.length);
          res.status(200).json(allBooks)
    }catch (error){
        console.error("Error displaying books:", error)
        res.status(400).json({error: "Failed to display books", details: error.message})
    }
}

const displayById = async (req, res)=>{
    try{
        const bookId = req.params._id
          const foundBook = await Book.findOne({bookId});
          res.status(200).json(foundBook)
    }catch (error){
        console.error("Error displaying book:", error)
        res.status(400).json({error: "Failed to display book", details: error.message})
    }
}

const updateBook = async (req, res) =>{
    try {
        const editedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(editedBook) 
    } catch (error) {
        console.error("Error updating book information)")
        res.status(400).json({error: "Failed to update book information", details: error.message})
    }
  }

const deleteBook = async (req, res) => {
    try {
        const bookId = await Book.findByIdAndDelete(req.params.id)
        res.status(201).json({message:`Deleted book`})
    } catch (error) {
        console.error("Error deleting book:", error)
        res.status(400).json({error: "Failed to delete book", details: error.message})
     
    }
  }

module.exports = {
  addBook,
  displayAllBooks,
  displayById,
  updateBook,
  deleteBook
};
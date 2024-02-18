import { getAllBooks, searchForBook } from "../models/booksModels.js";

export const _getAllBooks = async (req, res) => {
  try {
    const response = await getAllBooks();
    res.json(response);
  } catch (error) {
    res.ststus(404).json({ messege: "Cant find the books" });
  }
};

export const _searchForBook = async (req, res) => {
  try {
    const response = await searchForBook(req.params.id);
    res.status(200).json({ messege: "OK" });
    res.json(response);
  } catch (error) {
    res.status(404).json({ messege: "cant find requested book try again !" });
  }
};

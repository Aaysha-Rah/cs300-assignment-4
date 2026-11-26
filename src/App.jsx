import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import books from "../data/books.json";

export default function App() {
  const [collection, setCollection] = useState(books);

  function addBook(title, author) {
    const newBook = {
      id: crypto.randomUUID(),
      title: title,
      creator: author,
      category: "Uncategorized",
      status: "unread"
    };

    setCollection((previous) => [...previous, newBook]);
  }

  return (
    <main>
      <Header />
      <BookForm onAdd={addBook} />
      <BookList books={collection} />
    </main>
  );
}
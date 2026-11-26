import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import FilterBar from "./components/FilterBar";
import books from "../data/books.json";

export default function App() {
  const [collection, setCollection] = useState(books);
  const [filter, setFilter] = useState("all");

  function addBook(title, author) {
    setCollection((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        title,
        creator: author,
        category: "Uncategorized",
        status: "unread"
      }
    ]);
  }

  function removeBook(id) {
    setCollection((previous) =>
      previous.filter((book) => book.id !== id)
    );
  }

  function toggleRead(id) {
    setCollection((previous) =>
      previous.map((book) =>
        book.id === id
          ? {
            ...book,
            status: book.status === "read"
              ? "unread"
              : "read"
          }
          : book
      )
    );
  }

  const filteredBooks = collection.filter((book) =>
    filter === "all" ||
    (filter === "read"
      ? book.status === "read"
      : book.status !== "read")
  );

  return (
    <main>
      <Header />
      <BookForm onAdd={addBook} />
      <FilterBar filter={filter} onFilter={setFilter} />
      <BookList
        books={filteredBooks}
        onRemove={removeBook}
        onToggle={toggleRead}
      />
    </main>
  );
}
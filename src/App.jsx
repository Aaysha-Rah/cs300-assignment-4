import "./styles.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import books from "../data/books.json";

export default function App() {
  return (
    <main>
      <Header />
      <BookList books={books} />
    </main>
  );
}

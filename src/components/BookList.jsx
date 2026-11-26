import BookCard from "./BookCard";

export default function BookList({ books, onRemove, onToggle }) {
    return (
        <section>
            <h2>My Collection ({books.length})</h2>

            {books.length === 0 ? (
                <p>No books found. Try another filter or add a book.</p>
            ) : (
                books.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))
            )}
        </section>
    );
}
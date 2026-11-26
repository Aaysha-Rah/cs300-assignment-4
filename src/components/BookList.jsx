import BookCard from "./BookCard";
import EmptyState from "./EmptyState";

export default function BookList({ books, onRemove, onToggle }) {
    return (
        <section>
            <h2>My Collection ({books.length})</h2>

            {books.length === 0 ? (
                <EmptyState />
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
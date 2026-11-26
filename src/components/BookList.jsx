import BookCard from "./BookCard";

export default function BookList({ books }) {
    return (
        <section>
            <h2>My Collection</h2>
            <div className="book-list">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    );
}

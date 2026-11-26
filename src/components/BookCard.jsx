export default function BookCard({ book }) {
    return (
        <article className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.creator}</p>
            <p>Category: {book.category}</p>
        </article>
    );
}
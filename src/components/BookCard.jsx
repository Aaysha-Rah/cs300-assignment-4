export default function BookCard({ book, onRemove, onToggle }) {
    return (
        <article className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.creator}</p>
            <p>Category: {book.category}</p>
            <p>Status: {book.status === "read" ? "Read" : "Unread"}</p>

            <button onClick={() => onToggle(book.id)}>
                {book.status === "read" ? "Mark as Unread" : "Mark as Read"}
            </button>

            <button onClick={() => onRemove(book.id)}>
                Remove
            </button>
        </article>
    );
}
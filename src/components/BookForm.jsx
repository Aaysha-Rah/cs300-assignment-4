import { useState } from "react";

export default function BookForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim() || !author.trim()) {
            setError("Please enter both book title and author.");
            setTitle("");
            setAuthor("");
            return;
        }

        onAdd(title.trim(), author.trim());
        setTitle("");
        setAuthor("");
        setError("");
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h2>Add a Book</h2>

            <label htmlFor="title">Book Title</label>
            <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <label htmlFor="author">Author</label>
            <input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />

            <button type="submit">Add Book</button>

            {error && <p role="alert" style={{ color: "red" }}>{error}</p>}
        </form>
    );
}
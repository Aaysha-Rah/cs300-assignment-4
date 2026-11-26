export default function FilterBar({ filter, onFilter }) {
    return (
        <section>
            <label htmlFor="filter">Filter Books: </label>
            <select
                id="filter"
                value={filter}
                onChange={(e) => onFilter(e.target.value)}
            >
                <option value="all">All Books</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
        </section>
    );
}
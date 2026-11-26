import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

test("adds a valid book to the collection", () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText("Book Title"), {
    target: { value: "Atomic Habits" }
  });

  fireEvent.change(screen.getByLabelText("Author"), {
    target: { value: "James Clear" }
  });

  fireEvent.click(screen.getByRole("button", { name: "Add Book" }));

  expect(screen.getByText("Atomic Habits")).toBeInTheDocument();
  expect(screen.getByText("My Collection (9)")).toBeInTheDocument();
});

test("rejects an invalid form submission", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Add Book" }));

  expect(screen.getByRole("alert")).toHaveTextContent(
    "Please enter both book title and author."
  );

  expect(screen.getByText("My Collection (8)")).toBeInTheDocument();
});
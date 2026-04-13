import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { track } from "@vercel/analytics";
import Section from "../Section";
import BookCard from "./BookCard";
import BookOverlay from "./BookOverlay";
import { books, type Book } from "./types";

const Bookshelf = () => {
  const [selected, setSelected] = useState<Book | null>(null);

  return (
    <Section
      title="On my bookshelf"
      description="Some of the books that have stuck with me."
    >
      <div className="grid items-start grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => {
              track("book_open", { id: book.id });
              setSelected(book);
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <BookOverlay book={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Bookshelf;

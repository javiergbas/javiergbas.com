import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { track } from "@vercel/analytics";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../Section";
import BookCard from "./BookCard";
import BookOverlay from "./BookOverlay";
import { books, type Book } from "./types";

const Bookshelf = () => {
  const [selected, setSelected] = useState<Book | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "right" ? el.clientWidth * 0.75 : -el.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <Section
      title="On my bookshelf"
      description="Some of the books that have stuck with me."
    >
      <div className="relative">
        {/* Left fade + arrow */}
        <div
          aria-hidden="true"
          className={`absolute invisible sm:visible md:-left-4 top-0 bottom-0 pt-[120px] w-12 bg-gradient-to-r from-white to-transparent z-10 flex items-start pt-4 pointer-events-none transition-opacity duration-200 ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
        >
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="pointer-events-auto w-8 h-8 -ml-4 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Bookshelf — scroll to see more books"
          onScroll={updateScrollState}
          className="w-[min(calc(100vw-32px),736px)] -mx-4 px-4 flex overflow-x-auto gap-5 sm:gap-6 pt-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="shrink-0 w-[calc(50%-32px)] sm:w-[calc(25%-10px)] [scroll-snap-align:start]"
            >
              <BookCard
                book={book}
                onClick={() => {
                  track("book_open", { id: book.id });
                  setSelected(book);
                }}
              />
            </div>
          ))}
        </div>

        {/* Right fade + arrow */}
        <div
          aria-hidden="true"
          className={`absolute invisible sm:visible -right-4 top-0 bottom-0 pt-[120px] w-12 bg-gradient-to-l from-white to-transparent z-10 flex items-start pt-4 justify-end pointer-events-none transition-opacity duration-200 ${canScrollRight ? "opacity-100" : "opacity-0"}`}
        >
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="pointer-events-auto w-8 h-8 ml-4 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          >
            <ChevronRight size={16} />
          </button>
        </div>
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

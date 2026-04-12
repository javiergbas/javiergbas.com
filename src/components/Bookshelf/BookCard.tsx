import { motion } from "motion/react";
import { type Book, coverUrl } from "./types";

const BookCard = ({ book, onClick }: { book: Book; onClick: () => void }) => (
  <motion.button
    layoutId={`card-${book.id}`}
    onClick={onClick}
    className="group text-left w-full focus:outline-none cursor-pointer"
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2 }}
  >
    {/* Cover */}
    <motion.div
      layoutId={`cover-${book.id}`}
      className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow mb-3"
    >
      <img
        src={coverUrl(book.id)}
        alt={book.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>

    {/* Meta */}
    <motion.div layoutId={`meta-${book.id}`}>
      <div className="text-base font-medium text-gray-900 leading-snug">
        {book.title}
      </div>
      <div className="text-sm text-gray-400 mt-0.5">{book.author}</div>
    </motion.div>
  </motion.button>
);

export default BookCard;

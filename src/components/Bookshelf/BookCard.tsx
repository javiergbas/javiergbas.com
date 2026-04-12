import { motion } from "motion/react";
import { type Book, coverUrl } from "./types";

const BookCard = ({ book, onClick }: { book: Book; onClick: () => void }) => (
  <motion.button
    layoutId={`card-${book.id}`}
    onClick={onClick}
    className="group text-left w-full focus:outline-none cursor-pointer"
  >
    {/* Cover */}
    <motion.div
      layoutId={`cover-${book.id}`}
      whileHover={{ y: -16, rotate: -3 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      style={{ transformOrigin: "bottom center" }}
      className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-gray-100 group-hover:shadow-xl transition-shadow mb-3 cursor-grab"
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

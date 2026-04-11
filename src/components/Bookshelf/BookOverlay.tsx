import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { type Book, coverUrl } from "./types";

const BookOverlay = ({
  book,
  onClose,
}: {
  book: Book;
  onClose: () => void;
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet / Panel */}
      <motion.div
        layoutId={`card-${book.id}`}
        className="relative z-10 w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92dvh] sm:max-h-[85dvh] flex"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center text-white focus:outline-none"
          aria-label="Close"
        >
          <X size={13} strokeWidth={2.5} />
        </button>

        <div className="flex">
          {/* Cover strip */}
          <motion.div
            layoutId={`cover-${book.id}`}
            className="relative w-[320px] bg-gray-100 overflow-hidden shrink-0 hidden md:block"
          >
            <img
              src={coverUrl(book.id)}
              alt={book.title}
              className="w-full h-full object-contain object-top"
            />
          </motion.div>

          <div className="overflow-y-auto p-6 sm:p-7">
            <motion.div layoutId={`meta-${book.id}`} className="mb-5">
              <h2
                className="text-2xl text-gray-900 leading-snug"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                {book.title}
              </h2>
              <p className="text-sm text-gray-400 mt-1 italic">
                {book.subtitle}
              </p>
              <p className="text-sm text-gray-500 mt-2">by {book.author}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="border-t border-gray-100 pt-5"
            >
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
                My notes
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {book.notes}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookOverlay;

import { useEffect } from "react";
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
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm"
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
          className="absolute top-2 right-2 w-10 h-10 rounded-sm text-gray-600 bg-white hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center focus:outline-none"
          aria-label="Close"
        >
          <X size={13} strokeWidth={2.5} />
        </button>

        <div className="flex">
          {/* Cover strip */}
          <motion.div
            layoutId={`cover-${book.id}`}
            className="relative w-[320px] p-6  overflow-hidden shrink-0 hidden md:block"
          >
            <img
              src={coverUrl(book.id)}
              alt={book.title}
              className="w-full rounded-md shadow-xl"
            />
          </motion.div>

          <div className="overflow-y-auto p-6 sm:p-7">
            <div className="mb-5">
              <h2
                className="text-2xl text-gray-900 leading-snug"
                style={{ fontFamily: "--font-serif" }}
              >
                {book.title}
              </h2>
              <p className="text-sm text-gray-400 mt-1 italic">
                {book.subtitle}
              </p>
              <p className="text-sm text-gray-500 mt-2">by {book.author}</p>
            </div>

            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
                My notes
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {book.notes}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookOverlay;

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { type WorkItem, coverUrl } from "./types";

const WorkOverlay = ({
  workItem,
  onClose,
}: {
  workItem: WorkItem;
  onClose: () => void;
}) => {
  const { id, title, desc } = workItem;
  const coverImage = coverUrl(workItem.id);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = `work-item-title-${id}`;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed z-1000 inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Sheet / Panel */}
      <motion.div
        layoutId={`work-item-${id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl mx-auto sm:my-8 sm:w-full sm:max-w-4xl"
      >
        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-2 right-2 w-10 h-10 rounded-sm text-gray-600 bg-white hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Close"
        >
          <X size={16} strokeWidth={2.5} />
        </button>
        <article className="prose mx-auto">
          <motion.h1
            id={titleId}
            className="text-3xl font-bold text-gray-900 mb-0"
            style={{ fontFamily: "--font-serif" }}
            layoutId={`work-item-title-${id}`}
          >
            {title}
          </motion.h1>
          <motion.div
            className="text-lg text-gray-600 mt-1"
            layoutId={`work-item-desc-${id}`}
          >
            {desc}
          </motion.div>
          {coverImage && (
            <motion.div layoutId={`work-item-cover-${id}`}>
              <motion.img
                src={coverImage}
                alt={title}
                className="rounded-lg w-full mb-3"
                loading="lazy"
              />
            </motion.div>
          )}
          {workItem.body && <div className="mt-6">{workItem.body}</div>}
        </article>
      </motion.div>
    </motion.div>
  );
};

export default WorkOverlay;

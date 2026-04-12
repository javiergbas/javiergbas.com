import { useEffect } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { type WorkItem } from "./types";

const WorkOverlay = ({
  workItem,
  onClose,
}: {
  workItem: WorkItem;
  onClose: () => void;
}) => {
  const { id, title, desc } = workItem;

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
        className="relative transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl mx-auto sm:my-8 sm:w-full sm:max-w-4xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-10 h-10 rounded-sm text-gray-600 bg-white hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center focus:outline-none"
          aria-label="Close"
        >
          <X size={16} strokeWidth={2.5} />
        </button>
        <h1
          className="text-3xl font-bold text-gray-900"
          style={{ fontFamily: "--font-serif" }}
        >
          {title}
        </h1>
        <div className="text-lg text-gray-600 mt-1">{desc}</div>
        {workItem.body && <div className="mt-6">{workItem.body}</div>}
      </motion.div>
    </motion.div>
  );
};

export default WorkOverlay;

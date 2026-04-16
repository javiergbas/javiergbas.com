import { useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";
import { X } from "lucide-react";
import { type WorkItem, coverUrl } from "./types";

const WorkOverlay = ({
  workItem,
  selectedRect,
  onClose,
}: {
  workItem: WorkItem;
  selectedRect: DOMRect | null;
  onClose: () => void;
}) => {
  const { id, title, desc } = workItem;
  const coverImage = coverUrl(workItem.id);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = `work-item-title-${id}`;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const cardClip = selectedRect
    ? `inset(${selectedRect.top}px ${vw - selectedRect.right}px ${vh - selectedRect.bottom}px ${selectedRect.left}px)`
    : "inset(40% 35% 40% 35%)";

  const clip_anim: Variants = {
    initial: {
      clipPath: cardClip,
      opacity: 0,
      filter: "blur(10px)",
    },
    enter: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      clipPath: cardClip,
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

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
      variants={clip_anim}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed z-1000 bg-white inset-0 size-auto max-h-none max-w-none h-screen"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Close */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="fixed top-2 right-2 w-10 h-10 rounded-sm text-gray-600 bg-white hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center"
        aria-label="Close"
      >
        <X size={16} strokeWidth={2.5} />
      </button>
      <article className="w-full max-w-none flex flex-col h-screen prose mx-auto">
        <div className="p-4 border-b border-gray-200">
          <h1
            id={titleId}
            className="text-3xl font-bold text-gray-900 mb-0 w-full max-w-2xl mx-auto "
            style={{ fontFamily: "--font-serif" }}
          >
            {title}
          </h1>
          <div className="text-lg text-gray-600 mt-1 w-full max-w-2xl mx-auto ">
            {desc}
          </div>
        </div>
        <div className="overflow-y-auto">
          <div className="px-4 w-full max-w-2xl mx-auto">
            {coverImage && (
              <img
                src={coverImage}
                alt={title}
                className="rounded-lg w-full mb-3"
                loading="lazy"
              />
            )}
            {workItem.body && <div className="mt-6">{workItem.body}</div>}
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default WorkOverlay;

import { motion } from "motion/react";
import { type WorkItem, coverUrl } from "./types";

const WorkCard = ({
  workItem,
  onClick,
}: {
  workItem: WorkItem;
  onClick: () => void;
}) => {
  const { id, title, desc } = workItem;
  const coverImage = coverUrl(workItem.id);

  return (
    <motion.button
      key={`work-card-${workItem.id}`}
      layoutId={`work-item-${id}`}
      className="rounded-lg cursor-pointer overflow-hidden text-left w-full"
      onClick={onClick}
      type="button"
      aria-haspopup="dialog"
      whileHover="hovered"
    >
      {coverImage && (
        <motion.div
          className="overflow-hidden mb-3"
          layoutId={`work-item-cover-${id}`}
        >
          <motion.img
            src={coverImage}
            alt={title}
            className="w-full"
            loading="lazy"
            variants={{ hovered: { scale: 1.1 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      )}
      <div>
        <motion.h2
          className="text-lg font-medium text-gray-900 leading-snug"
          layoutId={`work-item-title-${id}`}
        >
          {title}
        </motion.h2>
        <motion.div className="mt-1" layoutId={`work-item-desc-${id}`}>
          {desc}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default WorkCard;

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
    <motion.div
      key={`work-card-${workItem.id}`}
      layoutId={`work-item-${id}`}
      className="rounded-lg cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {coverImage && (
        <motion.img
          src={coverImage}
          alt={title}
          className="w-full mb-3"
          loading="lazy"
          layoutId={`work-item-cover-${id}`}
        />
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
    </motion.div>
  );
};

export default WorkCard;

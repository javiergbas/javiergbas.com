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
      className=" rounded-lg cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="w-full mb-3"
          loading="lazy"
        />
      )}
      <div>
        <h2 className="text-lg font-medium text-gray-900 leading-snug">
          {title}
        </h2>
        <div className="mt-1">{desc}</div>
      </div>
    </motion.div>
  );
};

export default WorkCard;

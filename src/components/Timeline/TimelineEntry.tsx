import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { type Entry } from "./types";
import EntryContent from "./EntryContent";

const TimelineEntry = ({ entry }: { entry: Entry }) => {
  const isLife = entry.type === "life";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const entryScaleRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [1, 1, 1.3, 1, 1],
  );
  const emojiScaleRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [1, 1, 1.3, 1, 1],
  );
  const rotateRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [0, 0, -15, 0, 0],
  );

  const springConfig = { stiffness: 150, damping: 15 };
  const entryScale = useSpring(entryScaleRaw, springConfig);
  const emojiScale = useSpring(emojiScaleRaw, springConfig);
  const rotate = useSpring(rotateRaw, springConfig);

  return (
    <motion.div
      style={{ scale: entryScale }}
      ref={ref}
      className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4"
    >
      {/* Left col — life events */}
      <div className={`flex justify-end text-right ${isLife ? "" : "invisible"}`}>
        <EntryContent entry={entry} />
      </div>

      {/* Center emoji node — pinned to the line */}
      <motion.div
        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-2xl"
        style={{ scale: emojiScale, rotate }}
      >
        {entry.emoji}
      </motion.div>

      {/* Right col — work events */}
      <div className={isLife ? "invisible" : ""}>
        <EntryContent entry={entry} />
      </div>
    </motion.div>
  );
};

export default TimelineEntry;

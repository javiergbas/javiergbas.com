import { useRef, useState } from "react";
import type React from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { track } from "@vercel/analytics";
import Section from "../Section";
import { type WorkItem, workItems } from "./types";
import WorkCard from "./WorkCard";
import WorkOverlay from "./WorkOverlay";

const AnimatedCard = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      animate={
        isInView
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.6, filter: "blur(6px)" }
      }
      initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
      transition={
        isInView
          ? {
              duration: 0.5,
              delay: (index % 2) * 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }
          : { duration: 0.3 }
      }
    >
      {children}
    </motion.div>
  );
};

const Work = () => {
  const [selected, setSelected] = useState<WorkItem | null>(null);

  return (
    <Section title="Some stuff I've worked on">
      <div className="grid md:grid-cols-2 gap-6">
        {workItems.map((workItem, index) => (
          <AnimatedCard key={workItem.id} index={index}>
            <WorkCard
              workItem={workItem}
              onClick={() => {
                track("work_item_open", { id: workItem.id });
                setSelected(workItem);
              }}
            />
          </AnimatedCard>
        ))}
      </div>

      <AnimatePresence>
        {/* Modal */}
        {selected && (
          <WorkOverlay workItem={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Work;

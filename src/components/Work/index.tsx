import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { track } from "@vercel/analytics";
import Section from "../Section";
import { type WorkItem, workItems } from "./types";
import WorkCard from "./WorkCard";
import WorkOverlay from "./WorkOverlay";

const Work = () => {
  const [selected, setSelected] = useState<WorkItem | null>(null);

  return (
    <Section title="Some stuff I've worked on">
      <div className="grid md:grid-cols-2 gap-6">
        {workItems.map((workItem) => (
          <WorkCard workItem={workItem} onClick={() => { track("work_item_open", { id: workItem.id }); setSelected(workItem); }} />
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

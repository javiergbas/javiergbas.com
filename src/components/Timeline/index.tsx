import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Section from "../Section";
import TimelineEntry from "./TimelineEntry";
import { entries } from "./types";

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const bottom = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#51a2ff", "#c800de"],
  );

  return (
    <Section title="A bit of my story" ref={ref}>
      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gray-200" />
        {/* Progress */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-sky-600"
          style={{ bottom, background }}
        />

        <div className="space-y-12">
          {entries.map((entry, i) => (
            <TimelineEntry key={i} entry={entry} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Section from "./Section";

type Entry = {
  date: string;
  emoji: string;
  title: string;
  sub?: string;
  type: "life" | "work";
};

const entries: Entry[] = [
  { date: "Sep 1986", emoji: "👶", title: "Born in Madrid", type: "life" },
  { date: "Sep 2009", emoji: "🇨🇿", title: "Moved to Prague", type: "life" },
  { date: "Sep 2010", emoji: "🇺🇸", title: "Moved to Chicago", type: "life" },
  {
    date: "Feb 2012 – Jan 2013",
    emoji: "🎸",
    title: "Frontend Developer",
    sub: "Herzio",
    type: "work",
  },
  {
    date: "Feb 2013 – Nov 2018",
    emoji: "🎨",
    title: "Co-founder, Design & Frontend",
    sub: "Pixelonce",
    type: "work",
  },
  {
    date: "Dec 2016 – Jan 2020",
    emoji: "🛠️",
    title: "Product Designer & Frontend Developer",
    sub: "Getro",
    type: "work",
  },
  {
    date: "Feb 2017 – Nov 2018",
    emoji: "🗺️",
    title: "Frontend Developer",
    sub: "Wave Application",
    type: "work",
  },
  {
    date: "Jan 2020 – Nov 2025",
    emoji: "🤝",
    title: "Senior Product Designer",
    sub: "Getro",
    type: "work",
  },
  { date: "Aug 2020", emoji: "🇫🇷", title: "Moved to Paris", type: "life" },
  { date: "Dec 2023", emoji: "🌞", title: "Moved to Madrid", type: "life" },
  {
    date: "Feb 2024 – Aug 2025",
    emoji: "👆",
    title: "Design consultant",
    sub: "Aitaca",
    type: "work",
  },
  { date: "Sep 2024", emoji: "🐣", title: "Lucía was born", type: "life" },
  {
    date: "Nov 2025 – Present",
    emoji: "🤖",
    title: "Senior Product Designer",
    sub: "Findem.ai",
    type: "work",
  },
];

const EntryContent = ({ entry }: { entry: Entry }) => (
  <div className="min-w-0">
    <div className="text-xs text-gray-400 tabular-nums">{entry.date}</div>
    <div className="text-sm font-medium leading-snug text-gray-900">
      {entry.title}
      {entry.sub && (
        <>
          <span className="text-gray-400"> at </span>
          {entry.sub}
        </>
      )}
    </div>
  </div>
);

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
      <div
        className={`flex justify-end text-right ${isLife ? "" : "invisible"}`}
      >
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

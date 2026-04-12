export type Entry = {
  date: string;
  emoji: string;
  title: string;
  sub?: string;
  type: "life" | "work";
};

export const entries: Entry[] = [
  { date: "Sep 1986", emoji: "👶", title: "Born in Madrid", type: "life" },
  {
    date: "Sep 2004",
    emoji: "👨‍💻",
    title: "Started sudying software engineering",
    type: "work",
  },
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

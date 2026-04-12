type Props = {
  title: string;
  level?: "h2" | "h3" | "h4";
};

const styles = {
  h2: "text-2xl font-semibold text-gray-900 mt-12 mb-2",
  h3: "text-lg font-semibold text-gray-900 mt-8 mb-2",
  h4: "text-sm font-semibold text-gray-700 mt-4 uppercase tracking-widest mb-2",
};

const ContentHeading = ({ title, level = "h2" }: Props) => {
  const Tag = level;
  return (
    <Tag className={styles[level]} style={{ fontFamily: "--font-serif" }}>
      {title}
    </Tag>
  );
};

export default ContentHeading;

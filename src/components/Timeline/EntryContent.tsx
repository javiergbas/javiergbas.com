import { type Entry } from "./types";

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

export default EntryContent;

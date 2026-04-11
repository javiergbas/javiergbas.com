import cultureMap from "../../assets/books/culture-map.jpg";
import creativityInc from "../../assets/books/creativity-inc.jpg";
import playBigger from "../../assets/books/play-bigger.jpg";
import sapiens from "../../assets/books/sapiens.jpg";

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  notes: string;
};

export const books: Book[] = [
  {
    id: "culture-map",
    title: "The Culture Map",
    subtitle: "Breaking Through the Invisible Boundaries of Global Business",
    author: "Erin Meyer",
    notes:
      "Essential reading for anyone working across cultures or living abroad. I really enjoyed reading this book, and it has really helped me working in a diverse international team, and living abroad.",
  },
  {
    id: "creativity-inc",
    title: "Creativity, Inc.",
    subtitle:
      "Overcoming the Unseen Forces That Stand in the Way of True Inspiration",
    author: "Ed Catmull",
    notes:
      "A really inspiring book abour Pixar's history and their creative process. What I liked the most is their creative process, how they share and get feedback continously, and their amazing culture.",
  },
  {
    id: "play-bigger",
    title: "Play Bigger",
    subtitle:
      "How Pirates, Dreamers, and Innovators Create and Dominate Markets",
    author: "Al Ramadan, Dave Peterson, Christopher Lochhead & Kevin Maney",
    notes:
      "This book is about how winning companies don't just build better products, they define the problem space. It reframes what 'strategy' actually means and made me think differently about how we position product work.",
  },
  {
    id: "sapiens",
    title: "Sapiens",
    subtitle: "A Brief History of Humankind",
    author: "Yuval Noah Harari",
    notes:
      "A book about the full history of humanity that somehow makes you question everything about today. What stuck with me most is Harari's idea that what makes us powerful as a species is our ability to believe in shared fictions: money, companies, nations.",
  },
];

const coverById: Record<string, string> = {
  "culture-map": cultureMap,
  "creativity-inc": creativityInc,
  "play-bigger": playBigger,
  sapiens,
};

export const coverUrl = (id: string) => coverById[id] ?? "";

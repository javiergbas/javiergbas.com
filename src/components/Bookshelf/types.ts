import cultureMap from "../../assets/books/culture-map.jpg";
import creativityInc from "../../assets/books/creativity-inc.jpg";
import playBigger from "../../assets/books/play-bigger.jpg";
import sapiens from "../../assets/books/sapiens.jpg";
import factfulness from "../../assets/books/factfulness.jpg";
import monstruoDeColores from "../../assets/books/monstruo-de-colores.jpg";
import bookYouWish from "../../assets/books/book-you-wish.jpg";

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
  {
    id: "factfulness",
    title: "Factfulness",
    subtitle:
      "Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think",
    author: "Hans Rosling",
    notes:
      "A book that challenges how we see the world. It clearly shows that things are much better than the news and our instincts make us believe, always backed by data.",
  },
  {
    id: "monstruo-de-colores",
    title: "El monstruo de colores",
    subtitle: "Popup edition",
    author: "Anna Llenas",
    notes:
      "By far the most beautiful popup book I've seen. The popup elements are just incredible, and beyond that it helps kids understand their feelings in a simple and beautiful way. One of Lucía's favorites!",
  },
  {
    id: "book-you-wish",
    title: "The Book You Wish Your Parents Had Read",
    subtitle: "And Your Children Will Be Glad That You Did",
    author: "Philippa Perry",
    notes:
      "A book about how the way we interact with our kids shapes them, and especially how they'll interact with others. It made me reflect a lot on patterns I want to keep and ones I want to break. And not only with my kids, but all the time.",
  },
];

const coverById: Record<string, string> = {
  "culture-map": cultureMap,
  "creativity-inc": creativityInc,
  "play-bigger": playBigger,
  sapiens,
  factfulness,
  "monstruo-de-colores": monstruoDeColores,
  "book-you-wish": bookYouWish,
};

export const coverUrl = (id: string) => coverById[id] ?? "";

import MadridPopup from "./MadridPopup.tsx";

const Footer = () => (
  <footer className="max-w-3xl mx-auto px-8 md:px-6 pb-8 text-sm text-gray-600 text-center">
    Crafted with ❤️ and 🤖 in sunny <MadridPopup />
    {" · "}
    <a
      href="https://www.linkedin.com/in/javiergutierrezbas/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      LinkedIn
    </a>
    {" · "}
    <a
      href="https://github.com/javiergbas"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Github
    </a>
    {" · "}© {new Date().getFullYear()}
  </footer>
);

export default Footer;

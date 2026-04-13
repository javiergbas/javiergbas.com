import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Bookshelf from "./components/Bookshelf";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />

      <main className="max-w-3xl mx-auto px-8 md:px-6 py-24 space-y-24">
        <Section>
          <div className="text-lg space-y-4 text-gray-600 leading-relaxed">
            <p>
              I've spent fifteen years building digital products moving between
              design and engineering, and I love both too much to choose.
            </p>
            <p>
              I design and build experiences that feel considered, the kind
              where the details matter.
            </p>
            <p>
              These days I'm based in Madrid, working remotely for{" "}
              <a
                href="https://findem.ai"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Findem.ai
              </a>
              , and excited about what AI is changing in how we design and
              build.
            </p>
          </div>
        </Section>

        <Timeline />

        <Work />

        <Bookshelf />
      </main>

      <Footer />
      <Analytics />
    </>
  );
}

import Hero from './components/Hero'

export default function App() {
  return (
    <>
      <Hero />

      <main className="max-w-3xl mx-auto px-8 md:px-6 py-24 space-y-24">
        <Section title="About me">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a hybrid between a product designer and software engineer —
              and I genuinely love living in that intersection. It means I can
              sit in a conversation about business needs, contribute to design
              explorations, and then go build the thing. I find that moving
              fluidly between those disciplines makes for better products and
              more honest collaboration.
            </p>
            <p>
              I've been working in tech for 15 years, across both design and
              development. Over time I've come to care less about titles and
              more about outcomes: does it solve a real problem, does it feel
              good to use, and is it built well enough to last?
            </p>
            <p>
              These days I'm based in Madrid, working remotely for{' '}
              <a
                href="https://findem.ai"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Findem.ai
              </a>
              . I'm also leaning into AI — not just as a tool, but as a way to
              build faster and better than I could before.
            </p>
          </div>
        </Section>

        <Section title="Work">
          <p className="text-gray-600 leading-relaxed">
            {/* Fill in later */}
          </p>
        </Section>

        <Section title="Experiments">
          <p className="text-gray-600 leading-relaxed">
            {/* Fill in later */}
          </p>
        </Section>

        <Section title="Reads">
          <p className="text-gray-600 leading-relaxed">
            {/* Fill in later */}
          </p>
        </Section>
      </main>

      <footer className="max-w-3xl mx-auto px-8 md:px-6 pb-8 text-sm text-gray-600 text-center">
        Crafted with ❤️ and 🤖 in sunny Madrid · © {new Date().getFullYear()}
      </footer>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-3xl md:text-4xl text-gray-900 mb-6"
        style={{ fontFamily: "'Lora', Georgia, serif" }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <section>
    {title && (
      <h2
        className="text-3xl md:text-4xl text-gray-900 mb-6"
        style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
      >
        {title}
      </h2>
    )}
    {children}
  </section>
)

export default Section
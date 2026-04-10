import { forwardRef } from "react";

type SectionProps = {
  title?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ title, children, ...props }, ref) => (
    <section ref={ref} {...props}>
      {title && (
        <h2
          className="text-2xl md:text-3xl text-gray-900 mb-6"
          style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  ),
);

Section.displayName = "Section";

export default Section;

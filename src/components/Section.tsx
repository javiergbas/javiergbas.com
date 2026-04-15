import { forwardRef } from "react";

type SectionProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ title, description, children, ...props }, ref) => (
    <section ref={ref} {...props}>
      {title && (
        <h2
          className="text-2xl text-gray-900 mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-500 leading-relaxed mb-8 -mt-4">
          {description}
        </p>
      )}
      {children}
    </section>
  ),
);

Section.displayName = "Section";

export default Section;

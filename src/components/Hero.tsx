import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "motion/react";
import { track } from "@vercel/analytics";
import { ArrowUpRight } from "lucide-react";
import LinkedIn from "./icons/LinkedIn";
import MadridPopup from "./MadridPopup";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(20px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const blur = useTransform(scrollYProgress, [0.2, 0.5], [0, 6]);
  const scale = useTransform(scrollYProgress, [0.05, 1], [1, 0.8]);

  // Aurora
  const prefersReduced = useReducedMotion();
  const t = useMotionValue(0);
  useAnimationFrame((time) => {
    if (!prefersReduced) t.set(time / 100);
  });
  const b1x = useTransform(t, (v) => `${Math.sin(v * 0.07) * 10}%`);
  const b1o = useTransform(t, (v) => 0.14 + Math.sin(v * 0.13) * 0.05);
  const b2x = useTransform(t, (v) => `${Math.sin(v * 0.05 + 1.5) * 14}%`);
  const b2o = useTransform(t, (v) => 0.1 + Math.sin(v * 0.11 + 1) * 0.04);
  const b3x = useTransform(t, (v) => `${Math.sin(v * 0.09 + 3) * 8}%`);
  const b3o = useTransform(t, (v) => 0.08 + Math.sin(v * 0.17 + 2) * 0.03);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gray-900 flex items-center justify-center px-8 md:px-20 overflow-hidden"
    >
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{
            x: b1x,
            opacity: b1o,
            background:
              "linear-gradient(to right, transparent, #00d4aa 20%, #0066ff 55%, #00d4aa 80%, transparent)",
          }}
          className="absolute -top-1/4 -left-[20%] w-[140%] h-[65%] blur-[90px]"
        />
        <motion.div
          style={{
            x: b2x,
            opacity: b2o,
            background:
              "linear-gradient(to right, transparent, #7c00ff 25%, #cc00ff 60%, transparent)",
          }}
          className="absolute top-[25%] -left-[15%] w-[130%] h-[50%] blur-[100px]"
        />
        <motion.div
          style={{
            x: b3x,
            opacity: b3o,
            background:
              "linear-gradient(to right, transparent, #ff0066 30%, #ff6600 65%, transparent)",
          }}
          className="absolute bottom-[-10%] -left-[10%] w-[120%] h-[40%] blur-[110px]"
        />
      </div>

      <motion.div
        style={{
          y,
          opacity,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
          scale,
        }}
        className="max-w-3xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-7xl text-white leading-tight mb-8"
          style={{ fontFamily: "--font-serif" }}
        >
          Hola 👋
          <br />
          I'm Javier Gutiérrez
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10"
        >
          An engineer happily lost where design and code blur. Now building from{" "}
          <MadridPopup />, shipping globally.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.a
            href="https://www.linkedin.com/in/javiergutierrezbas/"
            target="_blank"
            rel="noreferrer"
            onClick={() => track("linkedin_click")}
            whileHover="hovered"
            initial="idle"
            animate="idle"
            variants={{
              idle: {
                boxShadow: [
                  "0 0 6px 1px rgba(255, 0, 200, 0.08)",
                  "0 0 12px 3px rgba(255, 0, 200, 0.25)",
                  "0 0 6px 1px rgba(255, 0, 200, 0.08)",
                ],
                borderColor: "rgba(255, 255, 255, 0.4)",
                color: "rgba(255, 255, 255, 0.8)",
                transform: "scale(1) rotate(0deg)",
                transition: {
                  boxShadow: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              },
              hovered: {
                boxShadow:
                  "0 0 14px 3px rgba(255, 0, 200, 0.2), 0 0 28px 6px rgba(255, 0, 200, 0.1)",
                borderColor: "rgba(255, 0, 200, 0.6)",
                color: "rgba(255, 255, 255, 1)",
                transform: "scale(1.05) rotate(-2deg)",
                transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border bg-white/5 text-sm font-medium backdrop-blur-sm"
          >
            <LinkedIn />
            Let's connect
            <motion.span
              variants={{
                idle: { scale: 1 },
                hovered: { scale: 1.4 },
              }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex"
            >
              <ArrowUpRight size={15} strokeWidth={2} />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

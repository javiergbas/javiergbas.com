import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import LinkedIn from './icons/LinkedIn'
import MadridPopup from './MadridPopup'

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(20px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])
  const blur = useTransform(scrollYProgress, [0.2, 0.5], [0, 6])
  const scale = useTransform(scrollYProgress, [0.05, 1], [1, .8])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-8 md:px-20 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, filter: useTransform(blur, (v) => `blur(${v}px)`), scale }}
        className="max-w-3xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-7xl text-white leading-tight mb-8"
          style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
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
          A Product Designer / Software Engineer living at the intersection of
          design and engineering. Now building from <MadridPopup />, shipping globally.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.a
            href="https://www.linkedin.com/in/javiergutierrezbas/"
            target="_blank"
            rel="noreferrer"
            whileHover="hovered"
            initial="idle"
            animate="idle"
            variants={{
              idle: {
                boxShadow: ['0 0 6px 1px rgba(255, 0, 200, 0.08)', '0 0 12px 3px rgba(255, 0, 200, 0.25)', '0 0 6px 1px rgba(255, 0, 200, 0.08)'],
                borderColor: 'rgba(255, 255, 255, 0.4)',
                color: 'rgba(255, 255, 255, 0.8)',
                transform: 'scale(1) rotate(0deg)',
                transition: { boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } },
              },
              hovered: {
                boxShadow: '0 0 14px 3px rgba(255, 0, 200, 0.2), 0 0 28px 6px rgba(255, 0, 200, 0.1)',
                borderColor: 'rgba(255, 0, 200, 0.6)',
                color: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.05) rotate(-2deg)',
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
  )
}

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const AiAvatarDemo = () => {
  const [eyeHeight, setEyeHeight] = useState(3.42857);
  const animationRef = useRef<number | null>(null);
  const normalEyeHeight = 3.42857;
  const blinkEyeHeight = 1;
  const size = "80px";

  const animateBlink = (
    startHeight: number,
    endHeight: number,
    duration: number,
  ) => {
    const startTime = performance.now();
    const difference = endHeight - startHeight;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - (-2 * progress + 2) ** 2 / 2;
      setEyeHeight(startHeight + difference * easeProgress);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animateBlink(normalEyeHeight, blinkEyeHeight, 300);
      setTimeout(() => animateBlink(blinkEyeHeight, normalEyeHeight, 300), 300);
    }, 4000);

    return () => {
      clearInterval(interval);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 py-16">
      <div className="relative">
        {/* Orb 1 — purple */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-4/5 h-4/5 bg-purple-300 rounded-full blur"
          animate={{
            x: ["0%", "10%", "0%", "-15%", "0%"],
            y: ["0%", "-10%", "0%", "15%", "0%"],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orb 2 — peach */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-4/5 h-4/5 bg-orange-200 rounded-full blur"
          animate={{
            x: ["0%", "-15%", "0%", "20%", "0%"],
            y: ["0%", "15%", "20%", "15%", "0%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orb 3 — pink */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-4/5 h-4/5 bg-pink-400 rounded-full blur"
          animate={{
            x: ["0%", "18%", "0%", "-16%", "0%"],
            y: ["0%", "-18%", "0%", "16%", "0%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* SVG face */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="relative rounded-full bg-white"
        >
          <path
            d="M23.5813 22.293C23.5813 22.293 20.6001 27.9201 23.5813 27.9201"
            stroke="#00005A"
            strokeWidth="2.08687"
            strokeLinecap="round"
          />
          <ellipse
            cx="2.14286"
            cy="3.42857"
            rx="2.14286"
            ry={eyeHeight}
            transform="matrix(-0.990268 -0.139173 -0.139173 0.990268 34.4897 15.7598)"
            fill="#00005A"
          />
          <ellipse
            cx="2.14286"
            cy="3.42857"
            rx="2.14286"
            ry={eyeHeight}
            transform="matrix(-0.990268 -0.139173 -0.139173 0.990268 19.2845 15.7598)"
            fill="#00005A"
          />
          <path
            d="M29.1429 33.4043C29.1429 33.4043 28.4086 36.6389 19.5165 33.6502"
            stroke="#00005A"
            strokeWidth="2.0893"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default AiAvatarDemo;

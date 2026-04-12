import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const quips = [
  { emoji: "💃", text: "Olé!" },
  { emoji: "🚀", text: "De Madrid al cielo" },
  { emoji: "💬", text: "We say Madriz" },
  { emoji: "🌙", text: "Dinner at 10pm?" },
  { emoji: "🍻", text: "Cañas any day!" },
  { emoji: "🥘", text: "Cocido on Wednesdays" },
  { emoji: "🌹", text: "San Isidro and Verbenas" },
];

const MadridPopup = () => {
  const [visible, setVisible] = useState(false);
  const [quip, setQuip] = useState<(typeof quips)[0]>(quips[0]);
  const [rotation, setRotation] = useState(0);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
    setQuip(quips[Math.floor(Math.random() * quips.length)]);
    setRotation((Math.random() * 3 + 1) * (Math.random() < 0.5 ? 1 : -1));
    setVisible(true);
  }, []);

  const hide = useCallback(() => setVisible(false), []);

  const handleTouch = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      show();
      dismissTimer.current = setTimeout(hide, 2000);
    },
    [show, hide],
  );

  return (
    <span
      aria-hidden="true"
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
      onTouchStart={handleTouch}
    >
      {/* The word */}
      <span className="border-b border-dashed border-white/40 cursor-default">
        Madrid
      </span>

      {/* Popup */}
      <AnimatePresence>
        {visible && (
          <motion.span
            key={quip.text}
            initial={{ opacity: 0, scale: 0.8, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: rotation }}
            exit={{ opacity: 0, scale: 0.85, y: 4 }}
            transition={{ duration: 0.2, ease: [0.34, 2.2, 0.5, 1] }}
            className="flex gap-2 items-center pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 z-10
              bg-white text-gray-900 text-base font-bold whitespace-nowrap
              px-4 py-2 rounded-lg shadow-xl"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            <span className="text-xl">{quip.emoji}</span> {quip.text}
            {/* Triangle tail */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default MadridPopup;

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Step = {
  id: string;
  icon: string;
  label: string;
  hint: string;
  check: "auto" | "manual"; // auto = detectable, manual = user must confirm
};

const steps: Step[] = [
  {
    id: "surface",
    icon: "✋",
    label: "Lay your hand flat on a surface",
    hint: "Palm down, fingers spread out, on a flat table or desk.",
    check: "manual",
  },
  {
    id: "card",
    icon: "💳",
    label: "Place a credit card next to your hand",
    hint: "Any standard card works — it's our size reference.",
    check: "manual",
  },
  {
    id: "level",
    icon: "📱",
    label: "Hold your phone parallel to the surface",
    hint: "Keep it flat and centered above your hand.",
    check: "auto",
  },
  {
    id: "lighting",
    icon: "💡",
    label: "Make sure there's good lighting",
    hint: "Avoid shadows across your hand or the card.",
    check: "manual",
  },
];

const VirtualSizerDemo = () => {
  const [current, setCurrent] = useState(0);
  const [phoneLevel, setPhoneLevel] = useState<"tilted" | "level">("tilted");
  const step = steps[current];
  const isLast = current === steps.length - 1;

  const next = () => {
    if (!isLast) setCurrent((c) => c + 1);
    else setCurrent(0);
  };

  return (
    <div className="rounded-lg border border-gray-100 bg-gray-50 overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-gray-100">
        <motion.div
          className="h-full bg-gray-900"
          animate={{ width: `${((current + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      <div className="p-6 space-y-6">
        {/* Step counter */}
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          Step {current + 1} of {steps.length}
        </p>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div className="text-4xl">{step.icon}</div>
            <p className="text-lg font-medium text-gray-900 leading-snug">
              {step.label}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">{step.hint}</p>

            {/* Auto-check demo for the phone level step */}
            {step.id === "level" && (
              <div className="mt-4 space-y-3">
                <div
                  className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg w-fit ${
                    phoneLevel === "level"
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    animate={{
                      backgroundColor:
                        phoneLevel === "level" ? "#16a34a" : "#d97706",
                      scale: phoneLevel === "level" ? [1, 1.3, 1] : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  {phoneLevel === "level"
                    ? "Phone is level — looking good"
                    : "Tilt your phone until it's parallel"}
                </div>

                {/* Simulate toggle */}
                <button
                  onClick={() =>
                    setPhoneLevel((v) => (v === "tilted" ? "level" : "tilted"))
                  }
                  className="text-xs text-gray-400 underline underline-offset-2 cursor-pointer hover:text-gray-600 transition-colors"
                >
                  Simulate phone {phoneLevel === "tilted" ? "levelling" : "tilting"}
                </button>
              </div>
            )}

            {/* Manual check badge */}
            {step.check === "manual" && step.id !== "level" && (
              <p className="text-xs text-gray-400 mt-2">
                ✦ This step can't be checked automatically — reviewed by eye.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action */}
        <button
          onClick={next}
          disabled={step.id === "level" && phoneLevel === "tilted"}
          className="w-full py-2.5 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLast ? "Start over" : step.id === "level" && phoneLevel === "tilted" ? "Waiting for phone to level…" : "Looks good, next →"}
        </button>
      </div>
    </div>
  );
};

export default VirtualSizerDemo;

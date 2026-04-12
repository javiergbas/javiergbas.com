import { useState, useRef, useEffect } from "react";
import "./virtualSizerDemo.css";
import "./animation.css";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Hand from "./Hand";
import Phone from "./Phone";

export default function VirtualSizerDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const contentRef = useRef(null);

  const steps = [
    {
      title: "As a reference, we need a standard-size card",
      description:
        "A credit card, ID card, or similar. No data will be collected and no payment will be made.",
    },
    {
      title: "Place it on a clear, well-lit table with nothing else around it",
    },
    {
      title: "Position your hand below the card",
    },
    {
      title: "Remove any rings or other accessories",
    },
    {
      title:
        "Hold your phone parallel to the table, align the crosshairs, and take the photo",
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Swipe detection thresholds and handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (isRightSwipe && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="w-[390px] mx-auto rounded-md border-2 border-gray-400 shadow-lg bg-gray-50 onboarding-container">
      <div className="header">
        {currentStep > 0 && (
          <div
            className="back-button"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            &#8249;
          </div>
        )}
        <div className="steps-indicator">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`step-dot ${index === currentStep ? "active" : ""}`}
              onClick={() => setCurrentStep(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      <div
        className="animation-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={`animation-frame step-${currentStep + 1}`}>
          <div className="card-container">
            <Card2 className="card-2" />
            <Card className="card-1" />
            <Card3 className="card-3" />
          </div>
          <Hand />
          <Phone />
        </div>
      </div>

      <div
        className="step-content"
        ref={contentRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <h2 className="step-title">{currentStepData.title}</h2>
        {currentStepData.description && (
          <p className="step-description">{currentStepData.description}</p>
        )}
      </div>

      <div className="button-container">
        <button
          className="next-button"
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? "Let's take the photo!" : "Next"}
        </button>
      </div>
    </div>
  );
}

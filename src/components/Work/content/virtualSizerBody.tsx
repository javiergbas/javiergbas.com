import ContentHeading from "./ContentHeading";
import VirtualSizerDemo from "./VirtualSizerDemo";
import image1 from "../../../assets/work/virtual-sizer-1.png";

export const VirtualSizerBody = (
  <div className="space-y-8">
    <div className="border-t border-gray-200 pt-5">
      <p className="text-sm leading-relaxed">
        <span className="font-medium text-gray-900">Client:</span> Aitaca.io
      </p>
      <p className="text-sm leading-relaxed">
        <span className="font-medium text-gray-900">Role:</span> Freelance
        Product Designer & Frontend Developer
      </p>
      <p className="text-sm leading-relaxed">
        <span className="font-medium text-gray-900">Tools:</span> Figma, React,
        CSS animations, Replit
      </p>
    </div>

    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      Aitaca is a SaaS startup building tools that integrate into online ring
      stores so their customers can measure ring sizes without a physical sizer,
      and without leaving the store.
    </p>

    <p>
      The solution: a widget that integrates directly into any online store —
      jewelry or smart rings — and lets shoppers measure their ring size from a
      single photo of their hand, taken on their phone without any downdload.
    </p>

    <ContentHeading title="The challenge" />
    <p>
      Getting an accurate measurement from a photo requires very specific
      conditions, and getting users to meet all of them is a UX problem as much
      as a technical one. The photo needs to be taken with:
    </p>
    <ul className="space-y-2 text-gray-600 leading-relaxed mt-3">
      <li>— The hand laid flat on a flat surface, fingers spread out</li>
      <li>— A credit card placed next to the hand as a size reference</li>
      <li>— The phone held completely parallel to the surface</li>
      <li>
        — Good, even lighting with no hard shadows across the hand or card
      </li>
      <li>— The full hand and card visible in frame</li>
    </ul>
    <p className="mt-4">
      Some of these constraints can be checked live as the user uses their
      camera, like using the phone's accelerometer c¡to detect whether it's
      parallel to the surface. Others can't, like verifying the card is fully in
      frame or that lighting is good without a check on the backend.
    </p>
    <p>
      That gap made the instructions critical. If users didn't follow them
      precisely, measurements would be wrong. The instructions had to be clear
      enough to get it right the first time, without feeling like a manual.
    </p>

    <ContentHeading title="Prototyping to learn" />

    <div>
      <img
        src={image1}
        alt="Job alerts scroll issue"
        className="w-full rounded-lg border border-gray-200"
      />
      <p className="text-sm text-gray-600 mt-2">Some screens of the tool</p>
      <p className="mt-6">
        Before touching the production app, I designed and built several
        approaches in React — different layouts, different flows, different ways
        of sequencing the instructions — and tested them with real users. CSS
        animations made it possible to quickly communicate motion and timing
        without writing production code.
      </p>
      <p className="mt-3">
        Each prototype taught us something: which steps caused hesitation, which
        instructions were misread, where users tried to skip ahead. That
        learning shaped what eventually shipped.
      </p>
    </div>
    <ContentHeading title="Try it" />
    <p className="text-gray-600">
      A simplified version of the instruction flow — including the live phone
      level check via accelerometer.
    </p>

    <VirtualSizerDemo />
  </div>
);

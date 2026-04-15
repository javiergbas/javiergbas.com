import AiAvatarDemo from "./AiAvatarDemo";
import AiAvatarDemo2 from "./aiAvatarDemo2";
import aiAvatar1 from "../../../assets/work/ai-avatar-1.png";
import aiAvatar2 from "../../../assets/work/ai-avatar-2.png";

export const AiAvatarBody = (
  <div>
    <div className="border-b border-gray-200 pb-5">
      <p className="not-prose">
        <span className="font-medium text-gray-900">Role:</span> Product
        Designer & Frontend Developer.
      </p>
      <p className="not-prose">
        <span className="font-medium text-gray-900">Tools:</span> Figma, React,
        SVG animations, Cursor, Claude Code.
      </p>
    </div>

    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      When Findem acquired Getro, it opened the door to something that hadn't
      been possible before: bringing Findem's AI agents directly into Getro's
      products.
    </p>

    <p>
      On one side we have the job seekers visiting our job boards. Instead of
      job seekers browsing alone, an AI agent could now surface relevant roles,
      answer questions, and guide the experience — all in real time.
    </p>
    <p>
      We also have our customer-facing products, more complex tools used by
      recruiters and talent leaders to search for professionals across their
      networks and beyond. For this context, we explored the idea of an
      astronaut: more adventurous, more capable-feeling, suited for the more
      powerful and exploratory nature of that search experience. Two agents, two
      audiences, each with their own visual identity — but part of the same
      system.
    </p>

    <h2>The challenge</h2>
    <p>
      AI agents on job boards are new territory. Job seekers have been trained
      by years of unhelpful chatbots to ignore or distrust anything that looks
      automated. The challenge wasn't just technical — it was about trust.
    </p>
    <p>
      The agents needed to feel warm and approachable, not robotic. It needed to
      signal intelligence without feeling cold or corporate. And it needed to
      earn trust quickly — ideally before the user had typed a single word.
      Design and motion had a central role in making that happen.
    </p>

    <h2>The avatars</h2>
    <p>
      The avatar is the first thing a user sees. It needed to communicate
      personality at a glance: alive, attentive, and a little warm. A circular
      face with expressive eyes and a simple smile — friendly without being
      cartoonish.
    </p>
    <figure>
      <img
        src={aiAvatar1}
        alt="Avatar design explorations"
        className="w-full rounded-lg border border-gray-200"
      />
      <figcaption>Early explorations of the avatar design.</figcaption>
    </figure>

    <figure>
      <img
        src={aiAvatar2}
        alt="Avatars in different contexts"
        className="w-full rounded-lg border border-gray-200"
      />
      <figcaption>Avatars used in different contexts.</figcaption>
    </figure>

    <div className="flex flex-column md:flex-row gap-4 [&>*]:flex-1">
      <AiAvatarDemo />
      <AiAvatarDemo2 />
    </div>

    <p className="not-prose text-gray-500 text-sm mt-4">Animated versions</p>
  </div>
);

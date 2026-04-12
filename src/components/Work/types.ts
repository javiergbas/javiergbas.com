import aIAvatarCover from "../../assets/work/ai-avatar-cover.png";
import virtualSizerCover from "../../assets/work/virtual-sizer-cover.png";
import getroFlowCover from "../../assets/work/getro-flow-cover.png";
import jobAlertsCover from "../../assets/work/job-alerts-cover.png";
import { GetroFlowBody } from "./content/getroFlowBody";
import { JobAlertsBody } from "./content/jobAlertsBody";
import { AiAvatarBody } from "./content/aiAvatarBody";
import { VirtualSizerBody } from "./content/virtualSizerBody";

export type WorkItem = {
  id: string;
  title: string;
  desc: string;
  body?: React.ReactNode;
};

export const workItems: WorkItem[] = [
  {
    id: "ai-avatar",
    title: "AI agent avatars",
    desc: "Designing and building a personality for Getro's AI agents.",
    body: AiAvatarBody,
  },
  {
    id: "virtual-sizer",
    title: "Ring sizing tool",
    desc: "A tool for online ring stores that measures your ring size from a single photo.",
    body: VirtualSizerBody,
  },
  {
    id: "job-alerts",
    title: "Job Alerts",
    desc: "Redesigning Job Alerts on Getro Job boards to optimize conversion.",
    body: JobAlertsBody,
  },
  {
    id: "getro-flow",
    title: "GetroFlow",
    desc: "Ideating a new product to help small companies hire.",
    body: GetroFlowBody,
  },
];

const coverById: Record<string, string> = {
  "ai-avatar": aIAvatarCover,
  "virtual-sizer": virtualSizerCover,
  "getro-flow": getroFlowCover,
  "job-alerts": jobAlertsCover,
};

export const coverUrl = (id: string) => coverById[id] ?? "";

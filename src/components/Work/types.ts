import aIAvatarCover from "../../assets/work/ai-avatar.png";
import getroFlowCover from "../../assets/work/getro-flow.png";
import jobAlertsCover from "../../assets/work/job-alerts.png";
import { GetroFlowBody } from "./content/getroFlowBody";
import { JobAlertsBody } from "./content/jobAlertsBody";

export type WorkItem = {
  id: string;
  title: string;
  desc: string;
  body?: React.ReactNode;
};

export const workItems: WorkItem[] = [
  {
    id: "ai-avatar",
    title: "AI agent avatar",
    desc: "Designing and building a personality for Getro's AI agent.",
  },
  {
    id: "virtual-sizer",
    title: "Virtual sizer",
    desc: "Designing and prototyping a tool that measures your ring size with just one picture.",
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
  "virtual-sizer": "",
  "getro-flow": getroFlowCover,
  "job-alerts": jobAlertsCover,
};

export const coverUrl = (id: string) => coverById[id] ?? "";

import ContentHeading from "./ContentHeading";
import getroFlow1 from "../../../assets/work/getro-flow-1.png";
import getroFlow2 from "../../../assets/work/getro-flow-2.png";

export const GetroFlowBody = (
  <div className="space-y-4">
    <div className="border-t border-gray-200 pt-5">
      <p className="leading-relaxed">
        <span className="font-medium text-gray-900">Team:</span> 1 UX
        researcher, 2 PMs, 1 engineer, 1 designer (me).
      </p>
      <p className="leading-relaxed">
        <span className="font-medium text-gray-900">Tools:</span> Miro, Figma,
        React.
      </p>
    </div>

    <ContentHeading title="Problem Statement" />
    <p className="text-gray-600 leading-relaxed">
      Hiring leads at early stage projects have too little time, poor (or
      nonexistent!) tools and often too few skills, to hire well – let alone
      build a better hiring system. This leaves them in danger of not keeping up
      with the exciting growth they’re part of, and wasting precious time,
      money, and motivation along the way.
    </p>

    <ContentHeading title="Process" />
    <p>
      During the whole quarter we did several research projects working close
      with 8 people responsible for hiring at early-stage fast-growing
      companies, all of them with different roles, but similar hiring goals.
    </p>
    <p>
      This is one of the projects that came out of research, additionally to
      validate the concept with live interviews, I created two landing pages – a
      general one, and one targeting web3 companies – with a waitlist to
      validate interest in the market.
    </p>

    <ContentHeading title="Outcomes & Lessons Learned" />
    <p>
      After a few weeks interviewing potential customers and prototyping
      different solutions we decided not to move forward with the project.
    </p>
    <p>
      However, we got lot of learnings that we've used afterwards. In early 2026
      we're building a new agentic product that is much better positioned.
    </p>

    <div className="flex flex-col items-center gap-4 mt-8 space-y-8">
      <img
        src={getroFlow1}
        alt="GetroFlow landing page concept"
        className="max-w-lg rounded-lg border border-gray-200"
      />
      <img
        src={getroFlow2}
        alt="GetroFlow web3 variant"
        className="max-w-lg rounded-lg border border-gray-200"
      />
    </div>
  </div>
);

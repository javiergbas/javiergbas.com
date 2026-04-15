import scrollIssue from "../../../assets/work/job-alerts-scroll-issue.png";
import thumb1 from "../../../assets/work/job-alerts-1.png";
import thumb2 from "../../../assets/work/job-alerts-2.png";
import thumb3 from "../../../assets/work/job-alerts-3.png";

export const JobAlertsBody = (
  <div>
    <div className="border-b border-gray-200 pb-5">
      <p className="not-prose">
        <span className="font-medium text-gray-900">Team:</span> 1 PM, 2
        engineers, 1 designer (me).
      </p>
      <p className="not-prose">
        <span className="font-medium text-gray-900">Tools:</span> Jira, Miro,
        Figma, HotJar, Woopra.
      </p>
    </div>

    <h2>Introduction</h2>
    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      Job alerts allow job seekers to subscribe to get email alerts when new
      relevant jobs are posted. A first iteration of this feature was launched
      to a few early access customers, now it's time to improve the UX and
      conversion.
    </p>
    <p>
      Getro helps make the best professional introductions happen, so everyone
      can unleash the potential in their professional network.
    </p>
    <p>
      One of the products we offer is a job board where jobs from different
      companies are aggregated automatically.
    </p>

    <h3>Problem Statement</h3>
    <p>
      The first iteration was working – users could subscribe and get email
      alerts – but the UX was not good enough, we got early feedback about it
      being confusing and we saw very low engagement, right below 1%.
    </p>
    <p className="text-gray-600 leading-relaxed mt-3">
      This project has two goals:
    </p>
    <ul className="space-y-1 text-gray-600 leading-relaxed mt-2">
      <li>
        <b>Make the functionality more clear.</b> It'll be a success if we see
        an increase in the number of users who set an alert from 1% to 5%.
      </li>
      <li>
        <b>Make the job boards look better.</b> It'll be a success if we get
        good feedback both internally and from early adopters.
      </li>
    </ul>

    <h3>Users & Audience</h3>
    <p>
      The main user persona in this project is the job seeker, professionals
      that are looking for a new professional opportunity.
    </p>
    <p>
      We reviewed the job seeker persona, usage metrics and other data like
      device usage.
    </p>
    <p>
      For confidentiality reasons, I'm intentionally not sharing more details
      about users, traffic and engagement.
    </p>

    <h3>Scope & Constrains</h3>
    <p>
      We had two weeks to work on the design of this first iteration of
      improvements.
    </p>
    <p>
      Because our job boards integrate with our customers' websites, it's always
      important to make sure we don't ship something that will conflict with
      their brand.
    </p>

    <h2>Design Process</h2>
    <h3>1. Research: Identifying the main issues</h3>
    <p>
      The project motivation and goals were clear, so it was time to start with
      research.
    </p>
    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      Having released a first iteration to a few early access customers allowed
      us having real usage data and real feedback from users and those
      customers.
    </p>

    <p>These are the main issues we detected:</p>
    <ol className="space-y-2 text-gray-600 leading-relaxed mt-3">
      <li>
        The button to turn on job alerts was often missed. The button position
        was disconnected from the jobs, making some users forget about it or not
        see it as relevant.
      </li>
      <li>
        Users needed to validate their email by clicking a link sent to their
        inbox. This step was adding friction, causing a 28% drop on the funnel.
      </li>
      <li>
        Once the user started scrolling through jobs, the CTA was not visible
        anymore. HotJar sessions showed us that users spent most time after
        scrolling down to filters and results.
      </li>
    </ol>

    <figure>
      <img
        src={scrollIssue}
        alt="Avatars in different contexts"
        className="w-full rounded-lg border border-gray-200"
      />
      <figcaption>Job alerts scroll issue</figcaption>
    </figure>

    <h3>2. Synthesis</h3>
    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      Analyzing data and feedback from different sources helped us understand
      what we should focus on. Once the main issues were clear, we detected the
      areas where we could maximize impact:
    </p>
    <p>
      Once the main issues were clear, we detected the areas where we could
      maximize impact:
    </p>
    <ul className="space-y-2 text-gray-600 leading-relaxed mt-3">
      <li>
        Email validation step: understand why it's there, its legal implications
        and check if we can remove it.
      </li>
      <li>
        Make job alerts visible when they are more relevant: when the user has
        set some filters and their attention was grabbed by jobs relevant to
        them.
      </li>
      <li>
        Guidance for first time users: make sure this feature is correctly
        introduced to new users, highlighting the ease of use, relevancy of jobs
        and value for the user.
      </li>
      <li>
        Improve visual style: make sure the CTA is easy to understand and
        doesn't clash with our customers' brands.
      </li>
    </ul>

    <h3>3. Ideation</h3>
    <p>
      Once we had a clear understanding of what we wanted to focus on and why,
      it was time to start generating ideas and testing them.
    </p>
    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      Rombo, our design system, helped us generate prototypes fast, which helped
      us get real feedback early.
    </p>
    <p>
      Because of the project scope (improving conversion vs creating a new
      feature), time constraint, and thanks to Rombo – our design system –, we
      started creating high-fidelity mockups early. This helped us get real
      feedback soon, something hard to get from wireframes when working on
      interface improvements.
    </p>
    <p className="text-gray-600 leading-relaxed mt-3">
      After the ideation process and several feedback sessions with different
      stakeholders, we decided to implement these changes:
    </p>
    <ul className="space-y-2 text-gray-600 leading-relaxed mt-3">
      <li>Remove email validation step</li>
      <li>Make the feature more visible and in a more relevant place</li>
      <li>
        Add more CTAs as the user scrolls down and the main CTA is no longer
        visible
      </li>
      <li>Fix visual styles and mobile view</li>
    </ul>

    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/3">
        <figure>
          <img
            src={thumb1}
            alt="Job alerts iteration 1"
            className="w-full rounded-lg border border-gray-200"
          />
          <figcaption>
            Explorations to find a better place for the CTA.
          </figcaption>
        </figure>
      </div>
      <div className="w-full md:w-1/3">
        <figure>
          <img
            src={thumb2}
            alt="Job alerts iteration 2"
            className="w-full rounded-lg border border-gray-200"
          />
          <figcaption>
            Explorations to make sure the CTA is visible as the user scrolls.
          </figcaption>
        </figure>
      </div>
      <div className="w-full md:w-1/3">
        <figure>
          <img
            src={thumb3}
            alt="Job alerts iteration 3"
            className="w-full rounded-lg border border-gray-200"
          />
          <figcaption>
            Making sure the new navbar elements fit in every scenario.
          </figcaption>
        </figure>
      </div>
    </div>

    <h3>4. Implementation</h3>
    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      Organizing work in small stories allowed us to start adding value fast.
    </p>
    <p>
      Before the engineering team started with the implementation, we got
      together to review the work to be done and create smaller stories that can
      be shipped on their own while the whole UX makes sense.
    </p>
    <p className="text-xl font-medium text-gray-800 leading-relaxed my-10 px-10">
      Thanks to connecting often with engineering during the whole process,
      there were few surprises during the implementation phase.
    </p>

    <h2>Outcomes & Lessons Learned</h2>
    <p>
      During these 2 weeks we got the designs ready to be implemented, including
      early validation with prototypes and engineering reviews.
    </p>
    <p>
      The next 2-week sprint was time to build, supporting the engineers to make
      sure they don't get blocked.
    </p>
    <p>
      After shipping all the stories for this iteration, it was time to measure
      impact! Let’s see how this work impacted each goal during the first 2
      weeks after releasing every change:
    </p>

    <h3>Impact Metrics</h3>
    <div className="flex gap-4 my-8 mx-auto">
      <div className="w-full border border-gray-200 p-6 rounded">
        <div className="text-4xl font-medium text-gray-900">4.4%</div>
        <div className="text-sm text-gray-600">Subscription rate</div>
      </div>
      <div className="w-full border border-gray-200 p-6 rounded">
        <div className="text-4xl font-medium text-gray-900">4.8×</div>
        <div className="text-sm text-gray-600">Signups increase</div>
      </div>
    </div>
    <p>
      However, we also got good feedback about how some parts are still
      confusing to some users, it will be very helpful for the next iteration.
    </p>

    <h3>Lessons Learned</h3>
    <p>
      Having a clear vision of what's being done, and great team collaboration
      are crucial for creating successful products. During this second
      iteration, we fixed the issues from the first one by making sure the whole
      team was aligned and increasing collaboration between product management,
      design and engineering.
    </p>
  </div>
);

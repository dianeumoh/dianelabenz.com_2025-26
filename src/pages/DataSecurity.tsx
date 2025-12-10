import CaseStudyLayout from '../components/CaseStudyLayout';
import { CSImageGroup, CSGrid, CSCard, CSSection, CSAudioButton, CSBlockquote, CSBrowserFrame } from '../components/CaseStudyBlocks';
import type { CaseStudyMeta } from '../types/casestudy';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useEffect } from 'react';
import PasswordGate from '../components/PasswordGate';

export default function DataSecurity() {
  const meta: CaseStudyMeta = {
    title: "Transforming the data security experience from data-dump to actionable insights",
    subtitle: "Designing a unified platform for Google Cloud security.", // Fallback for SEO
    heroImage: "/src/images/DSPM_Hero_Image.png", // Update with your real image path
    // We are NOT passing role/team/tags here because we will render them manually below
    role: "",
    team: [],
    timeline: "",
    tags: []
  };

  // --- DO NOT INDEX THIS PAGE ---
  useEffect(() => {
    // 1. Create the meta tag
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";

    // 2. Add it to the <head>
    document.head.appendChild(meta);

    // 3. Cleanup: Remove it when you leave the page (so your other pages ARE indexed)
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <CaseStudyLayout meta={meta}>
      {/* --- 1. HERO SECTION (With Glow) --- */}
      <div className="cs-hero-glow-wrapper">
        <AnimateOnScroll>
          <div className="container">
            <CSBrowserFrame>
            <img
              src={meta.heroImage}
              alt="Google Cloud Data Security Interface"
              className="cs-hero-img cs-img-no-shadow"
            />
            </CSBrowserFrame>
          </div>
        </AnimateOnScroll>
      </div>

      <div className="container">
        {/* --- 2. HEADER BLOCK --- */}
        <AnimateOnScroll>
          <div className="cs-header-block">
            <h1 className="cs-title">
              Transforming the data security experience from data-dump to actionable insights
            </h1>
            {/* Tags */}
            <div className="cs-tags-wrapper">
              <span className="tag-primary">MVP</span>
              <span className="tag-primary">End-to-end design</span>
              <span className="tag-primary">Product leadership & strategy</span>
            </div>

            {/* Date */}
            <span className="cs-date">July 2025 - August 2025</span>

            {/* Intro Paragraph */}
            <p className="cs-intro-text">
              How I transformed data security complexity into actionable insights
            </p>

          </div>
        </AnimateOnScroll>
        {/* --- 3. SPLIT SECTION (Impact vs Meta) --- */}
        <div className="cs-intro-split">

          {/* LEFT: Impact Card */}
          <div className="impact-card">
            <h3>Impact</h3>
            <p>
              As the strategic design lead for Data Security Posture Management (DSPM), I identified and solved core adoption challenges that led to slow time-to-value.
            </p>
            <ul>
              <li><strong>Redirected misaligned product strategy</strong> with a strategic workshop defining 30+ user-centered initiatives</li>
              <li><strong>Shipped validated MVP in GA launch</strong></li>
              <li><strong>Reduced time-to-value</strong> from days to hours</li>
            </ul>
          </div>

          {/* RIGHT: Metadata Stack */}
          <aside className="meta-stack">
            <div className="meta-block">
              <h4>Role</h4>
              <p>Lead product designer & strategist (product vision, strategy, workshop facilitation, end-to-end design)
              </p>
            </div>

            <div className="meta-block">
              <h4>Team</h4>
              <p>20+ cross-functional partners (engineering, product)
              </p>
            </div>
          </aside>
        </div>
      </div>
      <AnimateOnScroll>
        <CSSection>
        <CSAudioButton
            audioUrl="audio/Designing_Google_Cloud_DSPM_for_Action.m4a"
            text="Listen to this case study"
          />
         
        </CSSection>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <CSSection>
          <h3>Where we started</h3>
          <h2>Data Security Posture Management had a day 0 problem that was hurting adoption</h2>
          <p>Google Cloud's <a className="text-link" href="https://cloud.google.com/data-security-posture-management" target="_blank">Data Security Posture Management (DSPM)</a> service helps security and compliance teams understand where their sensitive data is and protect it from being accidentally exposed or stolen.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            {
              src: "src/images/DSPM_Before.png",
              alt: "Data Security Posture Management Start",
              caption: "Before: The Data Security Posture Management dashboard after configuration"
            }
          ]}
          backgroundColor="var(--color-gradient-tertiary)"
        />

      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>However, the product faced a critical "Day 0" problem. After onboarding, customers had to manually configure the service to see any meaningful findings, leading to slow time-to-value and sluggish adoption.</p>
          <p>The team sought to address the empty dashboard problem by providing customers pre-configured insights within 24 hours of onboarding.</p>
          <p><strong>While this sounded great on paper, I identified a glaring flaw in the strategy...</strong></p>
        </CSSection>
      </AnimateOnScroll>
      <PasswordGate audioUrl="audio/Designing_Google_Cloud_DSPM_for_Action.m4a">
      <AnimateOnScroll>
        <CSSection>
          <h3>The problem</h3>
          <h2>The team's plan was to add new insights...but I identified we had a solution for the wrong user</h2>
          <p> The proposed widgets included insights like cross-country data flows which addressed the needs of a data governance lead but would only add noise for our primary user, the security engineer, whose goal is to spot and stop threats like anomalous data access.
          </p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>

        <CSGrid>
          <CSCard
            variant="sketchy"
            icon={<img src="src/images/DSPM_SecondaryUser.png" alt="Pencil" />}
            title="The Data Governance Lead"
            description="''I need a holistic view of our data landscape to ensure policies are applied correctly to demonstrate compliance and so I can report on our posture and manage risk over time.''"
          />

          <CSCard
            variant="sketchy"
            icon={<img src="src/images/DSPM_PrimaryUser.png" alt="Pencil" />}
            title="The Data Security Engineer"
            description="''I need to immediately see what our high priority risks are so I can remediate the most critical dangers to our business before they are exploited.''"
          />
        </CSGrid>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>I feared that we were about to invest precious engineering resources building features for a tertiary persona, while failing to address the needs of our primary users. Continuing down this path meant we would miss our true key to adoption and lose out on the ability to make a powerful first impression.</p>
          <p><strong>Instead of jumping into designing the proposed solution, it became clear that we needed to align on a shared understanding of users roles, goals, and pain points to mitigate the risk of building features for the wrong person.</strong></p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>Design thinking workshops</h3>
          <h2>I pitched a visioning & rapid prototyping workshop to redirect strategy and save a month of meetings</h2>
          <p>The team's initial plan was to hold weekly meetings over several weeks to evolve the insights idea.</p>
          <p>I pitched the idea of a <strong>3-day strategic workshop</strong> to the product and engineering team as a way to save us a month of back-and-forth discussion. The goal was to align on a single vision of the customer, brainstorm "Aha!" moments to address the needs of our core personas, and prioritize our ideas based on user value and feasibility.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSBlockquote>
          <p>"How might we empower security, compliance, and other relevant teams to effortlessly achieve their data security and compliance goals and fulfill their jobs-to-be-done by providing clear, actionable, and intentionally surfaced insights across various surfaces, leading to a faster time-to-value and an immediate understanding of the product's core value?"</p>
        </CSBlockquote>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_Workshop_Whiteboard.png", alt: "Data Security Posture Management Whiteboard", caption: "" },
            { src: "src/images/DSPM_Workshop_Whiteboard_2.png", alt: "Aha moments and dot voting from the workshop", caption: "" }
          ]}
          backgroundColor="var(--color-gradient-tertiary)"
          caption="Snapshots of some of the activities during the Data Security Posture Management Workshop"
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>Leading up to the workshop, I partnered closely with PM and Eng leads to structure the agenda. During the three days, I facilitated a series of activities ranging from empathy mapping to solution brainstorming and prioritization, that guided the team from a place of misalignment to a shared, user-centered vision.</p>
          <p><strong>The workshop successfully addressed our strategy problem and resulted in three critical outcomes:</strong></p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSGrid>
          <CSCard
            variant="standard"
            icon="🔑" // Or <img src="..." />
            title="First Critical User Journey (CUJ) tracker"
            description="Mapping out the key interactions between our primary persona and our product"
          /><CSCard
            variant="standard"
            icon="🗺️" // Or <img src="..." />
            title="Updated 2025+ roadmap with over 30 user-centered initiatives"
            description="And prioritized 'Aha!' moments to address our persona's pain points"
          /><CSCard
            variant="standard"
            icon="🖼️" // Or <img src="..." />
            title="UX conceptual prototypes of the key 'Aha!' moments"
            description="For customer validation and user research"
          />
        </CSGrid>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>The North Star vision got leadership buy-in and was validated by enterprise customers.
          </p>
          <CSCard
            variant="sketchy"
            icon={<img src="src/images/noun-pencil.png" alt="Pencil" />}
            title="A note on workshops..."
            description="For a smaller-scale problem or a tighter timeline, my process would look very different:
- A focused 2-hour design sprint with 3 key leads.
- A series of asynchronous 1:1s to build consensus.
- A single, well-crafted one-pager doc that defines the problem and the proposed solution.
- Rapid design iteration in collaboration with key stakeholders."

          />
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>Design concepts</h3>
          <h2>From "Top 100" cards to prioritized, guided insights</h2>
          <p>To recap, the team's original plan to fix our Day 0 and value problem was to provide "Top 100" insight cards.</p>
          <CSImageGroup
            images={[
              {
                src: "src/images/DSPM_Top100.png",
                alt: "Recap of the proposed 'Top 100' cards",
                caption: "A dramatic recreation of the original proposed 'Top 100' cards",
                noShadow: true
              },
            ]}
            backgroundColor="var(--color-surface-secondary)"
          />
          <p>I identified this as a critical error. That's a data dump. It's not prioritized, it's not guided, and it just gives the user homework to untangle the signal from the noise.</p>
          <p><strong>My design goals and concepts were focused on addressing this.</strong></p>
        </CSSection>
      </AnimateOnScroll>


      <AnimateOnScroll>
        <CSSection>
          <h4>Establishing design principles</h4>
          <p>With <strong>less than 24 hours to synthesize our workshop findings, design, and present to leadership</strong>, I focused on creating high-level conceptual mocks.</p>
          <p>The goal was not to deliver final designs but provide the team with ideas to spark discussion and validate our new user-centered direction. I began by translating our learnings into core design principles that would serve as our guide.</p>
        </CSSection>
      </AnimateOnScroll>



      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_Insights_designgoals.jpg", alt: "Design goals: insight driven not data dump, visible progress and transparency, proactive guidance, seamless integrations", caption: "Design principles from the workshop" }
          ]}
          backgroundColor="var(--color-surface-secondary)"
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>Building directly on our new principles, I designed a new DSPM dashboard that transformed data security complexity into clear, actionable insights.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Concept 1: Get started with DSPM</h4>
          <p><strong>The problem:</strong> Users were overwhelmed and didn't know where to start.</p>
          <p><strong>My initial concept</strong> used a series of dropdowns like industry or security goals to generate a list of relevant tutorials and docs. This was inspired by a successful pattern in Google Kubernetes Engine.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_GetStarted_V1.png", alt: "V1: Get started with DSPM widget", caption: "V1: Get started with DSPM widget" }
          ]}
          backgroundColor="var(--color-surface-secondary)"
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>However, I immediately identified a feasibility problem. DSPM was in its infancy, and we had no content library to populate these recommendations. This "ideal" widget would be an empty shell, which would only increase user frustration.</p>
          <p><strong>So, I iterated on a more pragmatic and, honestly, better solution.</strong></p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_GetStarted_V2.png", alt: "V2: Get started with DSPM widget", caption: "V2: Get started with DSPM widget" }
          ]}
          backgroundColor="var(--color-surface-secondary)"
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>This Gemini-powered widget was the concept I actually pitched. It was designed to solve both problems at once:</p>
          <ol>
            <li>1. It solved the user's problem with high-value, pre-canned questions like "What are my active data security risks?"</li>
            <li>2. It solved the team's future resource problem by completely bypassing our "empty library" constraint</li>
          </ol>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Concept 2: Top 10 security risk recommendations</h4>
          <p><strong>The insight:</strong>During the workshop, we identified that security engineers struggled with alarm fatigue and needed an opinionated view of what was truly critical.</p>
          <p><strong>My North Star vision</strong> was this "Top 10 Security Risks" widget. It was designed to intelligently surface the most urgent threats.</p>
          <p>I chose a simple "Top 10 list" because it's a scannable pattern that forces prioritization and answers the user's real question: "What should I address now?"</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_Top10_Risks.png", alt: "V1: Top 10 security risk recommendations widget", caption: "Top 10 security risk recommendations widget" }
          ]}
          backgroundColor="var(--color-surface-secondary)"
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Concept 3: Sensitive data access by frameworks</h4>
          <p><strong>The insight:</strong> Both security and compliance teams were concerned about non-compliant access patterns to sensitive data.</p>
          <p><strong>The existing data map</strong> showed users what they had, but it couldn't answer their most critical question: "What do I fix first?"</p>
          <p><strong>My specific contribution</strong> was to transform this map from a simple visual into a true prioritization tool. I did this by enhancing it with the ability to overlay compliance frameworks like HIPAA on top of the existing asset and security finding data.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_DataMap_Vision.png", alt: "Frameworks overlayed on the data map", caption: "Frameworks overlayed on the data map" }
          ]}
          backgroundColor="var(--color-surface-secondary)"
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>This was a key addition. It allowed a user to aggregate their view to "all critical HIPAA violations" and then disaggregate all the way down to a single, high-priority resource that needed to be fixed.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection><h3>Design concepts: putting it all together</h3>
          <h2>The new vision transforms data security complexity into clear, actionable insights</h2>
          <p>In that 24-hour sprint, I designed the new conceptual vision.</p>

        </CSSection>
        <CSImageGroup
          images={[
            {
              src: "src/images/DSPM_Vision.png",
              alt: "The full conceptual vision",
              caption: "The full conceptual vision",
              noShadow: true
            },
          ]}
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>This new vision directly applies all four of our design goals to transform the potential 'data dump' into an actionable, insight-driven experience.
            After our design review with leadership, our Product Managers then took this concept to several key enterprise customers, and the feedback was overwhelmingly positive.</p>
          <p>We successfully validated that this new, opinionated, and guided approach solved our  'Day 0'  AND value problem.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>Designing the MVP</h3>
          <h2>Our tight GA deadline meant I needed to find low-cost ways to deliver Day 0 value</h2>
          <p>We had a GA deadline set before the workshop, but we wanted aspects of our North Star in that release. The timeline was tight, so I partnered closely with Product and Engineering to navigate real-world constraints.</p>
          <p><strong>Identifying quick wins:</strong> To ensure the insights we could provide were actionable, I partnered with eng to figure out which "signals" would be possible to surface. I proposed leveraging insights from our sister service, <a className="text-link" href="https://cloud.google.com/sensitive-data-protection" target="_blank">Sensitive Data Protection</a>, to add "highly sensitive info type" tags to our insight tables so security engineers could easily identify highly sensitive data at risk.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Replacing low-value features: From vague governance percentage to prioritized sensitive data insights</h4>
          <p>While designing the MVP, I identified that the existing "Resources under governance" widget was not very actionable and a bit misleading.</p>
          <CSImageGroup
            images={[
              { src: "src/images/DSPM_ResourcesWidget.png", alt: "Before: Resources under governance widget", caption: "Before: Resources under governance widget" }
            ]}
            backgroundColor="var(--color-surface-secondary)"
          />
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p><strong>The problem:</strong> The widget showed a vague "governance" percentage without context. Users couldn't tell if DSPM was even working. Based on prior UX research for adjacent services, I knew visibility into what DSPM had scanned was critical. It's a way to confirm the product is "on."</p>
          <p>But I didn't want just a "so what?" inventory view. I wanted to make it actionable.</p>
          <p>I raised my concerns with the PM and Engineering leads, who agreed with my assessment: <strong>it was wasting valuable dashboard space without providing clear value.</strong></p>
        </CSSection>
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <CSSection>
          <h4>Designing for signal, not noise</h4>
        <p><strong>The hierarchy challenge:</strong> DSPM scans various assets (BigQuery tables, Vertex AI datasets, etc.), but showing ALL scanned assets would bury the important information. Since DSPM is focused on protecting sensitive data, I decided to surface only highly sensitive assets, using the classification from Sensitive Data Protection to align with users' existing mental models.</p>
        <p>I designed the Data Security Overview widget to answer three questions in order:
          <ol>
            <li><strong>1. What's new?</strong> Discovered highly sensitive assets</li>
            <li><strong>2. What should I worry about first?</strong> Critical data risks</li>
            <li><strong>3. What else is going on?</strong> Most widespread sensitive info types</li>
          </ol>
        </p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_DataSecurityOverview.png", alt: "After: Data Security Overview widget", caption: "After: The new Data Security Overview widget" }
          ]}
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>This design provides Data Security Engineers and Data Governance leads with an overview of their highly sensitive data assets that we've scanned (vs. a vague governance percentage) and surfaces the most critical data risks associated with those assets.</p>
          <p>The <strong>"Critical data risks" prioritization:</strong> This shows a number summary (e.g., "8 highly sensitive data assets with critical severity findings"). The prioritization cuts through noise by focusing on critical/high severity findings on assets with highly sensitive information.</p>
          <p>This was important because a common complaint with SCC findings (which DSPM uses) is that findings can be generated on assets that aren't valuable, like dev environments. Since DSPM is a "tab" within SCC and SCC already has an "All risk" tab, this prioritization better aligns with DSPM's core value prop: protecting what actually matters</p>
          <p>This design utilized existing data from the service and components from our charting library so it was cheap for eng to build.</p>
          <p>A PM took this new mock to two customers and they loved it. This was a big win, allowing us to deliver key value from our aligned vision in time for the GA launch.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Insight cards: Making InfoTypes scannable without breaking the design system</h4>
          <p>For the prioritized insight cards (like "Top principals accessing sensitive data"), the team initially wanted to show only the principal and access count. High access count doesn't mean something nefarious is going on, so I pushed to include only "highly sensitive" data and add InfoType tags.</p>
          <p>I explored multiple approaches:</p>
          <ol>
            <li>1. <strong>Text only</strong> (Least scannable)</li>
            <li>2. <strong>Icon + text with color-coded types</strong> (most scannable—a key icon for passwords, credit card icon for payment data, etc.)</li>
            <li>3. <strong>Text-only with gray background</strong> (GCP standard, what we shipped)</li>
          </ol>
          <CSImageGroup
            images={[
              { 
                src: "src/images/InfoTypes_V1.png", 
                alt: "Insight table with infotypes presented as text only ",
                caption: "Iteration 1: Text only (least scannable)", 
              },
              {
                src: "src/images/InfoTypes_V2.png",
                alt: "Insight table with infotypes presented as tags with icons and color coded borders",
                caption: "Iteration 2: Icon + text with color-coded types (most scannable)"
              }
            ]}
            backgroundColor="var(--color-surface-secondary)"
          />
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>My ideal version used icons to break up the text. Seeing a key icon immediately alerts users that passwords are involved vs. a credit card icon for payment data. However, this design was too close to a new feature SCC designers were building for "toxic combinations," creating potential confusion.</p>
          <p>I had to walk it back to standard GCP tags (text on gray background) since the design system doesn't support icons in tags. While this was less scannable than my original design, it was low-lift for engineering and avoided design system conflicts.</p>
          <p>The Eng and Product director loved the icon iterations and wanted to "keep them as a reminder" that we needed to build toward this version in the future.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
          images={[
            { src: "src/images/InfoTypes_MVP.png", alt: "The shipped version of the insight cards with InfoTypes", caption: "MVP: The shipped version of the insight cards with InfoTypes using standard design system tags" }
          ]}
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p><strong>Designing for trust:</strong> I was careful not to add severity indicators to these insight tables. I didn't want to convey the information as "issues" or "findings" when, in the MVP, we couldn't confidently assess whether this information was actually a high-severity problem. Calling them "insights" preserved trust while still being useful.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Information architecture: Prioritizing user's immediate needs</h4>
          <p>The dashboard layout follows a clear hierarchy based on user needs:</p>
          <p><strong>Above the fold:</strong></p>
          <ol>
            <li>1. Data Security Overview (What's new? What's critical?)</li>
            <li>2. Top Data Security Findings by category and by framework (What should I worry about next?)</li>
            <li>3. Prioritized insight cards (What else should I know?)</li>
          </ol>
          <p><strong>Below the fold:</strong></p> <ol><li>4. Data Map & inventory (Exploratory, less time-sensitive)</li></ol>
          <p>This IA ensures that as soon as someone lands on DSPM, they can immediately identify changes in their highly sensitive assets, what issues to resolve first, and then explore additional insights. The goal was to create that "Aha!" moment without overwhelming users on Day 0.</p>
          <CSImageGroup
            images={[
              { src: "src/images/DSPM_MVP_IA.png", alt: "The information architecture of the DSPM dashboard", caption: "The information architecture of the DSPM dashboard (Shiped MVP)" }
            ]}
            backgroundColor="var(--color-surface-secondary)"
          />
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Throughout the design process, I partnered closely with engineering</h4>
          <p>No one likes design surprises, so throughout the process I partnered with engineering to implement the MVP. To do this I:</p>
          <ul>
            <li>Scheduled weekly design review meetings and made myself available via async communications</li>
            <li>Heavily annotated my designs</li>
            <li>Created prototypes for more complicated interactions and flows</li>
          </ul>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>The results</h3>
          <h2>The Data Security Posture Management MVP</h2>
        </CSSection>
        <CSImageGroup
          images={[
            { src: "src/images/DSPM_TTV_GA.png", alt: "The results of the DSPM MVP", caption: "The DSPM MVP" }
          ]}
        />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>This is the final MVP. It directly incorporates the pragmatic, user-centered solutions we designed and validated. Instead of a "data dump," the user is immediately greeted with the "Data Security Overview" widget, which we designed to be actionable and clear. They see the new, prioritized insight cards.</p>
          <p>This is the "Aha!" moment. We've successfully taken the user from an empty, confusing state to an actionable, insight-driven dashboard.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>Outcomes & validation</h3>
          <h2>Shipped validated MVP in GA. Established a new user-centered precedent.
          </h2>
          <p>My leadership on this project delivered three key outcomes that shifted our team to a user-centered strategy and shipped tangible value:</p>
          </CSSection>
          <CSGrid>
          <CSCard 
              variant="standard"
              icon=""
              title="Solved a critical strategy problem"
              description="The workshop I orchestrated aligned our team on the right user and saved weeks of debate, unlocking our ability to build the right solution. Leadership bought into the North Star vision, and enterprise customers validated the approach."
            />
            <CSCard 
              variant="standard"
              icon=""
              title="Delivered validated features in GA"
              description="The Data Security Overview widget and prioritized insight cards shipped in the GA release. Instead of a 'data dump,' users are immediately greeted with actionable, insight-driven information. Two customers who saw the mocks pre-launch loved the direction."
            />
            <CSCard 
              variant="standard"
              icon=""
              title="Established a new user-centered approach"
              description="The success of this process challenged the team's default feature-first thinking and created a new precedent for how we tackle complex problems in the future."
            />
          </CSGrid>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h3>Learnings & retrospective</h3>
            <h2>A designer's role is to be the connective tissue</h2>
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <CSGrid>
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/whatworked_icon.svg" alt="Lightbulb" />
              title="What worked:"
              description="Identifying low-cost opportunities to deliver vision within constraints. By leveraging existing data from Sensitive Data Protection, we shipped Day 0 value without blowing the GA timeline."
            />
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/learned_icon.svg" alt="Open book" />
              title="What I learned:"
              description="Our team saved weeks of debate and collaborated towards a shared goal with tangible outcomes in just three days. This drove home my belief that a designer’s most important role is often to be the 'connective tissue'—building the bridges and creating the shared context that allows the entire organization to move forward, aligned."
            />
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/differently_icon.svg" alt="Pencil eraser" />
              title="What I'd change:"
              description="I should have pushed the team to align on more specific quantitative goals during the workshop. While the team aligned on overall qualitative metrics like 'improving time-to-value,' aligning on more measurable goals (like reducing time from hours to minutes) would have made the discussions and design critiques even more focused and objective."
            />
          </CSGrid>
        </AnimateOnScroll>
        </PasswordGate>

    </CaseStudyLayout>
  );
}
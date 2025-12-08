import CaseStudyLayout from '../components/CaseStudyLayout';
import type { CaseStudyMeta } from '../types/casestudy';
import { CSSection, CSAudioButton, CSBrowserFrame, CSGrid, CSCard, CSImageGroup } from '../components/CaseStudyBlocks';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ArrowIcon from '../components/ArrowIcon';


export default function WellnessDashboard() {
  const meta: CaseStudyMeta = {
    title: "Wellness Dashboard",
    subtitle: "Designing a wellness dashboard for Google Cloud.", // Fallback for SEO
    heroImage: "/src/images/hpewellness_hero.png", // Using available wellness image
    // We are NOT passing role/team/tags here because we will render them manually below
    role: "",
    team: [],
    timeline: "",
    tags: []
  };


  return (
    <CaseStudyLayout meta={meta}>

      {/* --- 1. HERO SECTION (With Glow) --- */}
      <div className="cs-hero-glow-wrapper">
        <AnimateOnScroll>
          <div className="container">
            <CSBrowserFrame>
            <img
              src={meta.heroImage}
              alt="Wellness Dashboard Hero"
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
            Giving IT admins peace of mind with predictive insights
            </h1>
            {/* Tags */}
            <div className="cs-tags-wrapper">
              <span className="tag-primary">Product strategy</span>
              <span className="tag-primary">Design</span>
              <span className="tag-primary">Workshop facilitation</span>
            </div>

            {/* Date */}
            <span className="cs-date">August 2022 - September 2022</span>

            {/* Intro Paragraph */}
            <p className="cs-intro-text">
            Designing HPE GreenLake Cloud's first unified monitoring and case automation experience.            </p>

          </div>
        </AnimateOnScroll>
        {/* --- 3. SPLIT SECTION (Impact vs Meta) --- */}
        <div className="cs-intro-split">

          {/* LEFT: Impact Card */}
          <div className="impact-card">
            <h3>Impact</h3>
            <p>
            As the product design lead for the Wellness Dashboard, I led the strategy and end-to-end design of HPE GreenLake Cloud's first unified monitoring experience.
            </p>
            <ul>
              <li><strong>Aligned 12+ stakeholders</strong> around a unified vision for the wellness dashboard</li>
              <li><strong>Shipped unified dashboard in GA launch</strong> replacing fragmented health monitoring across multiple products</li>
              <li><strong>Contribute accessible chart patterns</strong> to HPE's Grommet design system</li>
              <li><strong>Established foundation for AI-powered insights</strong> in HPE's expanded monitoring portfolio</li>
            </ul>
          </div>

          {/* RIGHT: Metadata Stack */}
          <aside className="meta-stack">

            <div className="meta-block">
              <h4>Role</h4>
              <p>Product designer (product vision, product strategy, design thinking workshop facilitation, end-to-end design)</p>
            </div>

            <div className="meta-block">
              <h4>Team</h4>
              <p>15+ cross-functional partners (engineering, product) across 2 service teams (networking, storage)</p>
            </div>
            <div className="meta-block">
              <h4>Links & press</h4>
              <div className="meta-links">
                <a href="https://www.hpe.com/br/en/home.html" className="footer-external-link">Product website<ArrowIcon /></a>
                <a href="https://www.youtube.com/watch?v=GhPNVLq9DnY5" className="footer-external-link">See it in action<ArrowIcon /></a>
                <a href="https://community.hpe.com/t5/the-cloud-experience-everywhere/stay-ahead-of-it-issues-with-hpe-s-aiops-driven-wellness/ba-p/7215817" className="footer-external-link">Read the blog<ArrowIcon /></a>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <AnimateOnScroll>
        <CSSection>
        <h3>The problem</h3>
        <h2>HPE GreenLake Cloud lacked a single pane of glass view into the health and wellness of products and services</h2>
        <p>Today at HPE, each business unit provides a view of their products' health and issues resulting in siloed dashboards across multiple tools and services. Not only are there a ton of dashboards in the experience, but the data engine populating these dashboards also vary.</p>
        <p>Customers have to visit multiple portals to troubleshoot the root cause of an issue in their environment. The lack of a unified view eroded the customer experience and made our product less competitive in the market.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>Business goals</h3>
          <h2>Provide customers with actionable, personalized, and predictive health and wellness insights across their cloud environments</h2>
          <p>Market and user research showed that unified health and support visibility was not only “good to have” but a “must have”. The challenge for the team was to create a single pane of glass view into the health of our products and services.</p>
          <p>Our goals were to:</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSGrid>
        <CSCard
            variant="standard"
            icon="🤝" // Or <img src="..." />
            title="Create a unified view"
            description="of the health and wellness of our customers' cloud environments."
          /><CSCard
            variant="standard"
            icon="🤖" // Or <img src="..." />
            title="Provide customers with AI-driven proactive insights"
            description="to optimize the health of their infrastructure and services."
          /><CSCard
            variant="standard"
            icon="📉" // Or <img src="..." />
            title="Reduce mean time to resolution (MTTR) by 25% "
            description="per support case by providing case automation."
          />
        </CSGrid>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>Design thinking workshops</h3>
          <h2>I led a 4-day workshop that aligned siloed business units around shared customer needs</h2>
          <p>Since each business unit had their product/service health dashboard, I knew that it was going to be critical to make sure a unified dashboard accounted for each BU’s use cases and personas. I was a strong advocate for integrating design thinking exercises into the product development process.</p>
          <p>I led and facilitated a four-day design thinking workshop with the goal to collaborate on priority user stories, key personas, and prioritize winning ideas. I worked with my product manager to make sure the right people were included in the sessions.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <CSImageGroup
            images={[
              {
                src: "src/images/Workshop_Schedule.png",
                alt: "Design thinking workshop slide from share out deck",
                caption: "Pictured above is a slide from a share out deck I sent to workshop participants.",
                noShadow: true
              },
            ]}
            backgroundColor="var(--color-surface-secondary)"
          />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>The workshop resulted in:</p>
          <ul>
            <li><strong>Stakeholder alignment</strong> on user priorities and business goals.</li>
            <li><strong>A product requirements document (PRD)</strong> that would inform the MVP of the Wellness Dashboard. The PRD included jobs-to-be done and needs for key personas, reframed and aligned problem statements, and prioritized ideas created by the product and engineering leaders of the various BU’s on day 3 and day 4 of the workshop.</li>
          </ul>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <CSImageGroup
            images={[
              {
                src: "src/images/Wellness_Mural.png",
                alt: "Design thinking workshop slide from share out deck",
                caption: "I utilized several LUMA design thinking exercises and created a template in Mural.",
                noShadow: true
              },
              {
                src: "src/images/PriorityUserStories_1.png",
                alt: "Design thinking workshop slide from share out deck",
                caption: "Priority user stories and key personas were created based off the problem statement.",
                noShadow: true
              },
            ]}
            backgroundColor="var(--color-surface-secondary)"
            caption="Participants generated and prioritized ideas based off the problem statement, 'how might we let customers know their end services are running smoothly so they can accelerate their business and digital transformation needs?'"
          />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h3>Designing the MVP</h3>
          <h2>Consolidating multiple dashboards into a single, actionable view</h2>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
            images={[
              {
                src: "src/images/Wellness_Slide1.png",
                alt: "Wellness Dashboard slide 1 - Introdudincg Wellness Dashboard",
                caption: "",
              },
              {
                src: "src/images/Wellness_Slide2.png",
                alt: "Wellness Dashboard slide 2 - Make Informed Decisions",
                caption: "",
              },
              {
                src: "src/images/Wellness_Slide3.png",
                alt: "Wellness Dashboard slide 3 - Take Immediate Action",
                caption: "",
              },
            ]}  
          />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>I leveraged existing user research to better understand users' behaviors and mental models when monitoring their environment or performing root cause analysis. User data showed that the chart views were useful for users with more complex environments (example: large number of servers with more issues). All participants found a summary panel summarizing issues and severity useful and easy to understand.</p>
          <p>I explored solutions with a timeline and events list view to answer questions like: </p>
          <ul>
            <li>‘What is going on in my environment?’</li>
            <li>'Which devices is this issue impacting?'</li>
            <li>'How do I resolve this issue or get assistance with resolving this issue?'</li>
          </ul>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
            images={[
              {
                src: "src/images/Wellness_Future_Home.png",
                alt: "Future Vision Home & Overview",
                caption: "Future Vision - Home & Overview: Post MVP, users would have the ability to configure alerts, see insights into automatic support cases, and view predictive insights.",
                noShadow: true
              },
              {
                src: "src/images/Wellness_Future_Events.png",
                alt: "Future Vision - Events",
                caption: "Future Vision - Events: I explored an inbox model that would allow users to manage events or issues in their environment.",
                noShadow: true
              },
             
            ]}
            backgroundColor="var(--color-surface-secondary)"
            
          />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>I pushed back on scope cuts to preserve critical user value</h4>
          <p>Due to engineering limitations, the final PRD of the MVP Wellness Dashboard did not include charts, alert configuration, or inbox management. However, I advocated for including the issue timeline view in the PRD since customer research showed it was valuable for reactor personas who needed to perform root-cause analysis on issues in their environment.</p>
          <p>I consolidated the summary view and chart view with the events timeline to provide users with an at-a-glance view of their cloud environment.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
            images={[
              {
                src: "src/images/Wellness_Events_Table1.png",
                alt: "Wellness Dashboard MVP - Events Table 1",
                caption: "Consolidating the Overview & Events Page: I worked with the Design System team to align on the chart component. I also added a summary area for events and automatic cases to give users at-a-glance context.",
                noShadow: true
              },
              {
                src: "src/images/Wellness_Events_Table_Collapse.png",
                alt: "Wellness Dashboard MVP - Events Table Collapsed",
                caption: "Collapsed Summary View: I implemented a collapsible chart to save screen real estate since not all users would find the timeline view helpful.",
                noShadow: true
              }
            ]}
          />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Designing inbox management to combat alarm fatigue until alert configuration could ship</h4>
          <p>IT teams are constantly bombarded with system alarms on issues like server health or spikes in storage latency. The constant noise is known as alarm fatigue, in which busy admins who are constantly trying to put out real fires tune these alarms out.</p>
          <p>The PRD included "snooze alerts," but it wasn't clear how this would help users. After reviewing existing research on alarm fatigue, I realized snooze alone wouldn't solve the problem. Since IT admins didn't have the ability (yet) to configure alerts for relevancy, I needed to give them a way to manage the potential noise in their inbox.</p>
          <p>I pushed for archive and flag features to give users control over their view until we could ship alert configuration. I worked closely with the eng team to ensure feasibility, and both features made it into the MVP.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
            images={[
                {
                  src: "src/images/WellnessDashboard_Home_Inbox_1.png",
                  alt: "Wellness Dashboard MVP - Events Table Archive",
                  caption: "Archiving Messages: Users can archive messages to remove them from their inbox.",
                  noShadow: true
                },
                {
                  src: "src/images/WellnessDashboard_Case_Actions.png",
                  alt: "Wellness Dashboard MVP - Events Table Flag",
                  caption: "Flagging Messages: Users can flag messages as important to prioritize them.",
                  noShadow: true
                }
            ]}
          />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <p>For the event list itself, I studied inbox interaction patterns (Gmail, Outlook) to align with users' existing mental models. This meant standard actions like flag, archive, and mark as unread rather than inventing new patterns.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSSection>
          <h4>Proactive accessibility testing that shaped the HPE design system
          </h4>
          <p>I knew that launching without accessibility testing would create technical debt we'd have to fix later. I proactively kicked off testing with Renfro Consulting, partnering with the research team and a design system engineer.</p>
          <p>I also partnered with a designer from the Compute business unit to test more advanced chart patterns for the post-MVP design of the Wellness Dashboard. Thanks to HPE's own Grommet framework, we were able to test a functioning prototype of the experience before it went into production.</p>
        <p><strong>What we discovered:</strong> The Renfro testing uncovered issues we needed to address. The critical (red) and warning (orange) colors were too close when next to each other. While we utilized clear labels and hover menus, the testing identified that we'd need to incorporate shading or patterns to make them truly distinct.</p>
        <p>As an interim fix, I adjusted the color shades to prevent the issue while flagging the need for pattern variations in the long term.</p>
        <p><strong>Design system contribution:</strong> The accessible chart patterns we validated became part of HPE's Grommet Design System and were adopted by other services after launch. <strong>My specific contributions included the collapsible chart pattern and accessible warning and critical alert colors.</strong></p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CSImageGroup
            images={[
              { 
                src: "src/images/Wellness_Grommet_Colors.png",
                alt: "Wellness Dashboard Grommet Colors",
                caption: "Accessibility testing informed the design system and token colors (pictured above) used to define critical and warning states."
              }
            ]}
          />
      </AnimateOnScroll>
      <AnimateOnScroll>
          <CSSection>
            <h3>Learnings & retrospect</h3>
            <h2>Harnassing the power of democratizing design</h2>
            <p>Kicking off this project with a 4-day design thinking workshop was crucial for building a unified language around customer needs and business goals. It solidified the importance of democratizing design and encouraging non-designers to participate in design thinking methods and tools to help the team make wiser product decisions.</p>
            <img src="src/images/Fatima_Shoutout.png" alt="Lovely working with you Diane, love your flexibility, creativity, and work ethic!" />
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <CSGrid>
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/whatworked_icon.svg" alt="Lightbulb" />
              title="What worked:"
              description="Leading with a workshop before any design work began. This created stakeholder buy-in and a shared understanding of customer needs across siloed business units."
            />
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/learned_icon.svg" alt="Open book" />
              title="What I learned:"
              description="Mid-project scope cuts are inevitable. The key is knowing which features are non-negotiable. By grounding my pushback in customer research (timeline view for root-cause analysis, inbox management for alarm fatigue), I could defend what needed to stay."
            />
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/differently_icon.svg" alt="Pencil eraser" />
              title="What I'd change:"
              description="I wish I had advocated earlier for quantitative success metrics. While we had qualitative goals like 'unified view' and 'reduce MTTR,' we didn't define what success looked like in numbers. This made it harder to measure impact post-launch."
            />
          </CSGrid>
        </AnimateOnScroll>
    </CaseStudyLayout>
  );
}
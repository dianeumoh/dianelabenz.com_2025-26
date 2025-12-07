import CaseStudyLayout from '../components/CaseStudyLayout';
import type { CaseStudyMeta } from '../types/casestudy';
import { CSSection, CSAudioButton, CSBrowserFrame, CSGrid, CSCard, CSImageGroup } from '../components/CaseStudyBlocks';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ArrowIcon from '../components/ArrowIcon';


export default function WellnessDashboard() {
  const meta: CaseStudyMeta = {
    title: "Wellness Dashboard",
    subtitle: "Designing a wellness dashboard for Google Cloud.", // Fallback for SEO
    heroImage: "/src/images/hpewellness_selectedworks.png", // Using available wellness image
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
              <span className="tag-primary">0 → 1</span>
              <span className="tag-primary">End-to-end design</span>
              <span className="tag-primary">Product strategy</span>
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
          <h2>Leading design thinking workshops to align on the problem statement and generate innovative ideas</h2>
          <p>Since each business unit had their product/service health dashboard, I knew that it was going to be critical to make sure a unified dashboard accounted for each BU’s use cases and personas. I was a strong advocate for integrating design thinking exercises into the product development process.</p>
          <p>I led and facilitated a four-day design thinking workshop with the goal to collaborate on priority user stories, key personas, and prioritize winning ideas. I worked with my product manager to make sure the right people were included in the sessions.</p>
        </CSSection>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <CSImageGroup
            images={[
              {
                src: "src/images/placeholder.png",
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
          <h3>The solution</h3>
          <h2>Designing the MVP of the Wellness Dashboard experience</h2>
        </CSSection>
      </AnimateOnScroll>
    </CaseStudyLayout>
  );
}
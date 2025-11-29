import CaseStudyLayout from '../components/CaseStudyLayout';
import type { CaseStudyMeta } from '../types/casestudy';
import {CSImageGroup, CSGrid,CSCard, CSSection, CSBlockquote } from '../components/CaseStudyBlocks';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function ComplianceManager() {
  const meta: CaseStudyMeta = {
    title: "From zero-to-MVP: unifying the compliance experience on Google Cloud",
    subtitle: "Designing a unified platform for Google Cloud security.", // Fallback for SEO
    heroImage: "/src/images/compliancemanager_hero.png", // Update with your real image path
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
            <img
              src={meta.heroImage}
              alt="Google Cloud Compliance Interface"
              className="cs-hero-img"
            />
          </div>
        </AnimateOnScroll>
      </div>

      <div className="container">

        {/* --- 2. HEADER BLOCK --- */}
        <AnimateOnScroll>
          <div className="cs-header-block">
            <h1 className="cs-title">
              From zero-to-MVP: unifying the <br />
              compliance experience on Google Cloud
            </h1>

            {/* Tags */}
            <div className="cs-tags-wrapper">
              <span className="tag-primary">0 → 1</span>
              <span className="tag-primary">End-to-end design</span>
              <span className="tag-primary">Product strategy</span>
            </div>

            {/* Date */}
            <span className="cs-date">March 2024 - January 2025</span>

            {/* Intro Paragraph */}
            <p className="cs-intro-text">
            Unblocking $275M in enterprise pipeline by unifying Google Cloud's fragmented compliance experience
            </p>
          </div>
        </AnimateOnScroll>
        {/* --- 3. SPLIT SECTION (Impact vs Meta) --- */}
        <div className="cs-intro-split">

          {/* LEFT: Impact Card */}
          <div className="impact-card">
            <h3>Impact</h3>
            <p>
              As a lead designer for Compliance Manager, I owned the end-to-end
              user experience from initial strategy and vision to the final MVP.
            </p>
            <ul>
              <li><strong>$275M</strong> in enterprise pipeline unblocked</li>
              <li><strong>100+</strong> customers onboarded pre-GA launch (exceeded targets)</li>
              <li><strong>60+</strong> stakeholders aligned around unified vision</li>
            </ul>
          </div>

          {/* RIGHT: Metadata Stack */}
          <aside className="meta-stack">

            <div className="meta-block">
              <h4>Role</h4>
              <p>Product designer (product vision, prototyping, product strategy, conceptual design, research, end-to-end design)</p>
            </div>

            <div className="meta-block">
              <h4>Team</h4>
              <p>60+ cross-functional partners (design, engineering, product) across 2 service teams</p>
            </div>

            <div className="meta-block">
              <h4>Links & press</h4>
              <div className="meta-links">
                <a href="#" className="text-link">Product website</a>
                <a href="#" className="text-link">TechCrunch</a>
                <a href="#" className="text-link">Google Cloud Next</a>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <AnimateOnScroll>
        <CSSection>
          <h3>The problem</h3>
          <h2>A fragmented compliance experience left customers disoriented</h2>
          <p>Organizations using Google Cloud must meet complex compliance requirements (CIS, HIPAA, GDPR) to prevent data breaches. But the compliance experience was fragmented across two separate products, <a href="https://cloud.google.com/assured-workloads" target="_blank" className="text-link">Assured Workloads</a> and <a href="https://cloud.google.com/security-command-center" target="_blank" className="text-link">Security Command Center</a> (SCC), making it nearly impossible for DevOps and GRC teams to get a unified view of their compliance status.</p>
          <p>Customers couldn't easily monitor their compliance posture, identify and remediate issues, or prepare for audits.</p>
        </CSSection>
      </AnimateOnScroll>

<AnimateOnScroll>
      <CSImageGroup
  images={[
    { 
      src: "src/images/AssuredWorkloads.png", 
      alt: "Assured Workloads",
      caption: "Old: Assured Workloads Compliance Dashboard"
    },
    { 
      src: "src/images/SecurityCommandCenter.png", 
      alt: "Security Command Center",
      caption: "Old:Security Command Center Compliance Dashboard" 
    }
  ]}
  caption=""
  backgroundColor="var(--color-gradient-tertiary)"
/>
</AnimateOnScroll>

      <AnimateOnScroll>
        <CSSection>
          <h3>The challenge</h3>
          <h2>Navigating competing priorities and organizational constraints</h2>
          <p>Leadership mandated integration of Assured Workloads into Security Command Center, but left implementation to the teams. The announcement blindsided Assured Workloads—they had to abandon their roadmap, which was already addressing customer pain points like better monitoring beyond just violations.</p>
          <p><strong>The default solution:</strong> a "lift-and-shift" integration that would move their existing experience into SCC with minimal changes, preserving team velocity.</p>
        </CSSection>
       
      </AnimateOnScroll>
      <CSSection>
        <p><strong>My position:</strong> This would compound the problem. Research I led showed customers found it <em> "too hard to know how to be compliant on Google Cloud."</em> Porting two inconsistent experiences into one product would create:</p>
        </CSSection>
        <CSGrid>
    <CSCard 
      variant="standard"
      icon="😵‍💫" // Or <img src="..." />
      title="High customer toil & confusion"
      description="Forcing two sets of contradicting terminology and navigation guaranteed user confusion and increased toil."
    />
    <CSCard 
      variant="standard"
      icon="🏗️"
      title="Technical debt & unstable architecture"
      description="Two platforms built on entirely different deployment models meant maintaining a clunky, incoherent experience."
    />
    <CSCard 
      variant="standard"
      icon="💸"
      title="Zero improvement to the core adoption challenge"
      description="It ignored the core user insight that compliance was “too hard to know”, exacerbating our adoption problem."
    />
  </CSGrid>
  <CSSection>
    <p><strong>My approach:</strong> Advocate for a truly unified experience that would reduce customer toil, accelerate future development, and address our adoption challenge.</p>
  </CSSection>
  <AnimateOnScroll>
    <CSSection>
      <h3>Vision prototype</h3>
      <h2>Building the business case for unified compliance</h2>
      <p>I partnered with the SCC UX lead to create a vision prototype demonstrating a phased path to full integration. We designed around three principles based on my prior research:</p>
      <ol>
        <li>1. A unified way to apply frameworks</li>
        <li>2. A single monitoring view</li>
        <li>3. A consistent experience to view and triage compliance findings</li>
      </ol>
    </CSSection>
    <CSImageGroup
          images={[
        
            { 
              src: "src/images/cm_visionslide_2.png", 
              alt: "North star concept of unified dashboard",
              caption: "Unified dashoard with standardized metrics" // <--- Specific caption
            },
            { 
              src: "src/images/cm_visionslide_3.png", 
              alt: "North star concept of posture management",
              caption: "Consistent way to apply and manage frameworks" // <--- Specific caption
            },
            { 
              src: "src/images/cm_visionslide_4.png", 
              alt: "North star concept of compliance monitoring",
              caption: "A single monitoring view for all frameworks" // <--- Specific caption
            }
          ]}
          backgroundColor="var(--color-gradient-tertiary)"
          caption="A few key slides from the unified compliance presentation"
        />
  </AnimateOnScroll>
  <CSSection>
    <p>We presented the strategy to a small working group of PM and engineering leads. The team had concerns about timeline and resources, but saw the feasibility of a phased approach. To make a case for dedicated time and resources, we presented to senior leadership.</p>
    <p>The presentation served as the official catalyst for the "Unified Compliance" initiative, shifting focus to building a fully integrated experience.</p>
    <CSCard
      variant="sketchy"
      icon={<img src="src/images/knot.png" alt="Tangled knot" />}
      title="The messy middle"
      description="Alignment didn't happen overnight. It took weeks of continued discussion after the design review—engineering feasibility assessments, political negotiation between teams, and clarifying the phased deprecation strategy. But the presentation served as the catalyst for the 'Unified Compliance' initiative, shifting focus from co-location to true integration."
    />
  </CSSection>
  <AnimateOnScroll>
  <CSSection>
    <h3>Prototype & test</h3>
    <h2>Running rapid discovery with customers</h2>
    <p>I led three 2-week design sprints to validate the MVP with customers.</p>
    </CSSection>
    <CSSection>
    <h4>Sprint #1: North star concept</h4>
    <p><strong>Hypothesis:</strong> Users with varying compliance experience need tailored guidance</p>
    <p>Based on my adoption-barriers study, I knew that cloud engineers setting up GCP infrastructure often lacked compliance experience. As one participant highlighted:</p>
      <CSBlockquote variant="accent">
        "These cloud engineers who are responsible for setting up the cloud infra on GCP may not have much experience with compliance. Having additional recommendations for those engineers would be helpful." <br/>- Data & AI Engineer, Public Sector
      </CSBlockquote>
      <p>I designed an AI-powered (<a href="https://gemini.google.com/" target="_blank" className="text-link">Gemini</a>) compliance score simulator, inspired by credit score tools, that provided clear, personalized recommendations for improving overall compliance scores.</p>
      </CSSection>
    <CSImageGroup
          images={[
        
            { 
              src: "src/images/Gemini_Compliance_1.png", 
              alt: "Compliance score simulator showing predicted scores based on remediation actions",
              caption: "" // <--- Specific caption
            },
            { 
              src: "src/images/Gemini_Compliance_2.png", 
              alt: "Compliance score simulator showing predicted scores based on remediation actions",
              caption: "" // <--- Specific caption
            },
          ]}
          backgroundColor="var(--color-gradient-tertiary)"
          caption="Compliance score simulator showing predicted scores based on remediation actions"
        />
        </AnimateOnScroll>
        <AnimateOnScroll>
        <CSSection>
          <p><strong>Outcome:</strong> ✅ Validated: 8/10 participants saw value in predicted scores. However, delivering truly personalized recommendations based on each customer's environment wasn't technically feasible for MVP. Rather than ship a generic AI experience that would erode trust, I deprioritized AI features and focused on deterministic, auditable scoring that GRC teams could defend to regulators.</p>
        </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h4>Sprint #2: Near-term experience</h4>
            <p>I applied Sprint 1 learnings to improve transparency and guidance in the near-term MVP. Another adoption barrier was lack of visibility between regulatory requirements (controls) and the Google Cloud policies that achieve those requirements.</p>
            <p>Despite pushback to create a policy-first view for DevOps teams, I advocated for and designed a "controls-first" experience for all users.</p>
            <CSCard
      variant="sketchy"
      icon={<img src="src/images/noun-pencil.png" alt="Tangled knot" />}
      title='Why "controls-first" mattered strategically'
      description="Controls (Compliance requirements) are the cloud-agnostic way Compliance leads and GRC teams measure compliance. An experience without this is like Google Maps without the turn-by-turn directions. For public sector customers, this was table stakes. Without it, we couldn't demonstrate we understood compliance workflows."
    />
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/Create posture_MyCanadaProtectedB.png", 
                alt: "Controls-first experience",
                caption: "The controls-first view allows GRC users to work in 'controls' (what auditors care about) while letting engineers work in 'policies' (what they implement), creating a single source of truth for both.",
                annotations: [
                  "1.'Controls-centric' view: Addresses the compliance “black-box” problem by showing the relationship between compliance requirements and the necessary policies to satisfy them",
                  "2.View by controls or policies: Allows GRC users to work in 'controls' (what auditors care about) while letting engineers work in 'policies' (what they implement), creating a single source of truth for both."
                ]
              },
            ]}
            backgroundColor="var(--color-gradient-tertiary)"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <p><strong>Outcome:</strong> ✅ Validated: The "controls-first" view tested with 100% positive sentiment across 6 sessions </p>
          </CSSection>
        </AnimateOnScroll>
  

    </CaseStudyLayout>
  );
}